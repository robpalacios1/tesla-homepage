FROM node:12

WORKDIR /app

ADD package.json yarn.lock /app/

RUN npm install

EXPOSE 3000

ADD . /app

ENTRYPOINT [ "node" ]

CMD [ "index" ]
