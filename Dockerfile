
FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . .

EXPOSE 3333

RUN yarn

CMD ["yarn","dev"]