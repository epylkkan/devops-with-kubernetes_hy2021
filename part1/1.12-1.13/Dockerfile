#FROM node:14-alpine
FROM node

WORKDIR /usr/src/app

COPY server.js todo_list.db Dockerfile package-lock.json package.json .
COPY views ./views
COPY public ./public

#RUN apk update && apk install sqlite3
RUN npm install fs --save && npm install express --save && npm install path --save && \
    npm install request --save && npm install ejs --save && npm install sqlite3 --save

EXPOSE 3000
CMD ["node", "server.js"]
