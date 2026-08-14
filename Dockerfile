FROM node:22-alpine

WORKDIR /app

COPY . .

EXPOSE 8085

CMD ["node", "index.js"]