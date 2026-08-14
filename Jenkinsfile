pipeline {
    agent any

    environment {
        IMAGE_NAME = "mudassar9530/node-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
        CONTAINER_NAME = "node-app"
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
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker push $IMAGE_NAME:$IMAGE_TAG
                        docker push $IMAGE_NAME:latest

                        docker logout
                    '''
                }
            }
        }

        stage('Deployed') {
            steps {
                sh '''
                    export "KUBECONFIG=$HOME/.kube/config"
                    kubectl apply -f deployment/ns.yml
                    kubectl apply -f deployment/deployment.yml
                    kubectl apply -f deployment/service.yml

                    
                '''
            }
        }
    }
    

    post {
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
