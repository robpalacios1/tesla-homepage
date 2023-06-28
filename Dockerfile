FROM node:12

COPY [".", "/usr/src/"]

WORKDIR /home/roberto/tesla-homepage/scr/

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD [ "index.js" ]