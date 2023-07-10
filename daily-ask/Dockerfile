FROM node:16.17.0-bullseye-slim AS builder
ENV PUPPETEER_SKIP_DOWNLOAD true
WORKDIR /usr/app
COPY . .
RUN npm ci
RUN npm run build

FROM node:16.17.0-bullseye-slim

RUN apt-get update && apt-get install -y gnupg wget \
  && wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg \
  && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends google-chrome-stable \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app
ENV NODE_ENV production
COPY --chown=node:node --from=builder /usr/app/.env ./
COPY --chown=node:node --from=builder /usr/app/build ./src/.
COPY --chown=node:node --from=builder /usr/app/package*.json ./
RUN npm ci --omit=dev
USER node
CMD ["src/main.js"]