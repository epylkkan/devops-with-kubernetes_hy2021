FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY . .

#RUN npm install
#RUN npm install ejs --save
RUn npm install express --save

EXPOSE 3001

CMD ["npm", "start"]
