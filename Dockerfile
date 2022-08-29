FROM node:18-alpine3.15

WORKDIR /app
COPY ./server /
RUN npm install

EXPOSE 3000
