FROM node:14.16.1-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm i

COPY . .
RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "run", "start:prod"]
