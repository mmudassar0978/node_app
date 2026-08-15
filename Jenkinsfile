pipeline {
    agent any

    environment {
        IMAGE_NAME = "mudassar9530/node-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                    docker tag $IMAGE_NAME:$IMAGE_TAG $IMAGE_NAME:latest
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                        echo "$DOCKER_PASS" | docker login \
                            -u "$DOCKER_USER" \
                            --password-stdin

                        docker push $IMAGE_NAME:$IMAGE_TAG
                        docker push $IMAGE_NAME:latest

                        docker logout
                    '''
                }
            }
        }

        stage('Update Kubernetes Manifest') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'github_cred',
                    usernameVariable: 'GIT_USER',
                    passwordVariable: 'GIT_TOKEN'
                )]) {

                    sh '''
                        sed -i "s|image: mudassar9530/node-app:.*|image: mudassar9530/node-app:$IMAGE_TAG|" deployment/deploy.yml

                        git config user.name "Jenkins"
                        git config user.email "jenkins@example.com"

                        git add deployment/deploy.yml

                        git diff --cached --quiet || \
                        git commit -m "Update node-app image to $IMAGE_TAG"

                        git push https://$GIT_USER:$GIT_TOKEN@github.com/mmudassar0978/node_app.git HEAD:main
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Docker image pushed and Git manifest updated successfully!'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}