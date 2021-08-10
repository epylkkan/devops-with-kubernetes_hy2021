FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY . .

#RUN npm install
RUN npm install ejs --save && npm install express --save && npm install request-promise --save

EXPOSE 3002

CMD ["node", "index.js"]
