# Gitlab Webhook API using NestJS

WebHook for GibLab CI/CD. Should be sending a message to your Telegram bot when Gitlab CI running.

Using NestJS with love.

## How to start

1. Create file .env

   `TELEGRAM_TOKEN=`

   `TELEGRAM_CHATID=`

2. With VScode

   `npm install`

   `npm run start` or `npm run start:dev`

3. With docker-compose
   `docker-compose up`

## How to build
`docker-compose build` or `npm run build`

## Run Production as Docker
`docker run -p 3000:3000 -e "TELEGRAM_TOKEN=YOUR_TELEGRAM_TOKEN"  -e "TELEGRAM_CHATID=YOUR_TELEGRAM_CHAT_ID"  tuanitpro/gitlab_webhook_nestjs`