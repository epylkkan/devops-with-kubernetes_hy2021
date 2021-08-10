FROM node:14-alpine

WORKDIR /usr/src/app
COPY . .
COPY server.js todo_list.db Dockerfile package-lock.json package.json .
COPY views public .
COPY server.js .

#COPY package* ./

RUN apk update && apk add --no-cache npm nodejs

#RUN npm ci

#RUN apt update -y && apt upgrade -y && \
#    npm init && \
    # entry point: (index.js) && \
#    npm install express --save 




EXPOSE 8080
CMD ["npm", "start"]
