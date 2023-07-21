FROM node:alpine

WORKDIR /app 

COPY package*.json .

COPY yarn.lock .

RUN npm install

COPY . .

RUN npm run start

EXPOSE 3000

CMD [ "npm", "start" ]