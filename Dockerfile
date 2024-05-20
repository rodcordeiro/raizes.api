FROM node:20 AS builder

WORKDIR /rod

COPY . .

RUN yarn && yarn build

EXPOSE 80

CMD [ "yarn", "start:prod" ]
