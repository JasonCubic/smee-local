FROM node:10-alpine

WORKDIR /usr/app

COPY ./package.json ./package.json
RUN npm install
COPY ./ ./

CMD ["node", "./index.js"]
