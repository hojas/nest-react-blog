FROM node:20.10.0-alpine AS builder

WORKDIR /opt/app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install
COPY . .
RUN cd /opt/app/libs/markdown-viewer && pnpm i && \
    cd /opt/app/libs/markdown-editor && pnpm i
RUN pnpm nx build web --prod


FROM node:20.10.0-alpine

WORKDIR /opt/app
COPY --from=builder /opt/app/dist/apps/web .
RUN npm i

CMD npm run start
