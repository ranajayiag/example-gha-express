require('dotenv').config();

const express = require('express');
const serverless = require('serverless-http');
const swaggerUi = require('swagger-ui-express');
const { getEnv, swaggerSpec } = require('./src/config');
const { router } = require('./src/routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', router);

if (getEnv('NODE_ENV') === 'development') {
  // Run the express API locally
  const port = getEnv('PORT', '3000');
  app.listen(port, () => console.log(`Listening on: http://localhost:${port}`));
} else {
  // Create handler for Lambda
  module.exports.handler = serverless(app);
}
