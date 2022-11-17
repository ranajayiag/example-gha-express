# Example GitHub Actions Express app

This is an example ExpressJS app designed to showcase how GitHub Actions work.

Before setting up locally or deploying, run `cp .env.example .env` and populate `.env` with your env vars

## Local setup

> **Prerequisites:** Node v16+

1. Run `npm i`
2. Run `npm start` to start the express app locally for testing
3. Open [http://localhost:3000/swagger](http://localhost:3000/swagger) to test endpoints

## Deployment

> **Prerequisites:** Node v16+, AWS credentials for Serverless framework to deploy with

1. Run `npm run deploy`
2. Once complete, access the API on the API gateway URL printed in the console output

> Don't forget to put /api or /swagger on the end of the URL
