require('dotenv').config();

const express = require('express');
const serverless = require('serverless-http');

const getEnv = (name, defaultValue) => process.env[name] || defaultValue;

const appEnvs = {
  APP_NAME: getEnv('APP_NAME'),
  APP_VERSION: getEnv('APP_VERSION'),
  BUILD_KEY: getEnv('BUILD_KEY'),
  SECRET_KEY: getEnv('SECRET_KEY'),
  AWS_LAMBDA_NAME: getEnv('AWS_LAMBDA_NAME')
};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    status: 'OK',
    appEnvs
  });
});

app.post('/api', (req, res) => {
  res.json({ ...req.body });
});

if (getEnv('NODE_ENV') === 'development') {
  // Run the express API locally
  const port = getEnv('PORT', '3000');
  app.listen(port, () => console.log(`Listening on: http://localhost:${port}`));
} else {
  // Create handler for Lambda
  module.exports.handler = serverless(app);
}
