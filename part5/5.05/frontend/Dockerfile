FROM node:14-alpine

WORKDIR /usr/src/app

COPY front.js Dockerfile package-lock.json package.json .
COPY public ./public
COPY views ./views

RUN npm install express --save && npm install cors --save && \
    npm install ejs --save && npm install pg --save && npm install custom-env

EXPOSE 8080
CMD node front.js
