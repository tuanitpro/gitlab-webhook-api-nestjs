FROM node:19.1.0-alpine3.15 AS build

RUN mkdir -p /usr/local/node && chown -R node:node /usr/local/node
WORKDIR /usr/local/node
COPY --chown=node:node package*.json ./
USER node
RUN npm ci

COPY --chown=node:node . .
ENV NODE_ENV production
RUN npm run build && \
    npm prune --production  && \
    npm cache clean --force

FROM node:19.1.0-alpine3.15 AS production
WORKDIR /usr/local/node
ENV NODE_ENV production
COPY --chown=node:node --from=build ./usr/local/node/package.json ./
COPY --chown=node:node --from=build ./usr/local/node/node_modules ./node_modules
COPY --chown=node:node --from=build ./usr/local/node/dist ./dist

CMD [ "node", "dist/main.js" ]
EXPOSE 3000