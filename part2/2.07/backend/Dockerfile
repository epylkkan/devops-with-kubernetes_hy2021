FROM node:14-alpine

WORKDIR /usr/src/app

COPY server.js Dockerfile package-lock.json package.json .
COPY public ./public

RUN npm install express --save && npm install cors --save && \ 
    npm install pg --save && npm install custom-env


EXPOSE 3002
CMD ["node", "server.js"]
