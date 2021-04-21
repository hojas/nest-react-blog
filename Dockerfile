FROM node:14.16.1-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
# RUN npm i -g yarn
RUN yarn

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start:prod"]
