FROM node:14-alpine
#FROM node

WORKDIR /usr/src/app

COPY front.js Dockerfile package-lock.json package.json ./
COPY views ./views
COPY public ./public

#RUN apk update && apk install sqlite3
RUN npm install fs --save && npm install express --save && npm install axios --save && \
    npm install request --save && npm install ejs --save 

EXPOSE 3000
CMD ["node", "front.js"]
