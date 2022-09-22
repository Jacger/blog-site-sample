FROM node:18-alpine3.15

WORKDIR /app

COPY ./entrypoint.sh ./wait-for-it.sh /

RUN chown 1000:1000 /app

USER node
