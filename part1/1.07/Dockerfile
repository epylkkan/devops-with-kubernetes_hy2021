FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci
RUN npm install ejs --save
RUn npm install express --save

COPY . .

CMD ["npm", "start"]