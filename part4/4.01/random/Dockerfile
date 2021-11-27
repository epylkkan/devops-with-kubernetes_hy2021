FROM node:alpine

COPY package* ./

RUN npm ci

COPY . .

#RUN npm install
RUN npm install ejs --save && npm install express --save && npm install request-promise --save && \ 
    npm install dotenv --save && npm install custom-env && npm install node-fetch --save

EXPOSE 3003

CMD node index.js
