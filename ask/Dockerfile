FROM node:16.17.0-bullseye-slim AS builder
WORKDIR /usr/app
COPY . .
RUN npm ci
RUN npm run build

FROM node:16.17.0-bullseye-slim
ENV NODE_ENV production
WORKDIR /usr/app
COPY --chown=node:node --from=builder /usr/app/.env ./
COPY --chown=node:node --from=builder /usr/app/build ./src/.
COPY --chown=node:node --from=builder /usr/app/swagger.yaml ./
COPY --chown=node:node --from=builder /usr/app/package*.json ./
RUN npm ci --omit=dev
USER node
CMD ["src/main.js"]