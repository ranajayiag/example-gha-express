const swaggerJsdoc = require('swagger-jsdoc');

const getEnv = (name, defaultValue) => process.env[name] || defaultValue;

const appEnvs = {
  APP_NAME: getEnv('APP_NAME'),
  APP_VERSION: getEnv('APP_VERSION'),
  BUILD_KEY: getEnv('BUILD_KEY'),
  SECRET_KEY: getEnv('SECRET_KEY'),
  AWS_LAMBDA_NAME: getEnv('AWS_LAMBDA_NAME')
};

const swaggerSpec = swaggerJsdoc({
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: appEnvs.APP_NAME,
      version: appEnvs.APP_VERSION,
    }
  },
  swaggerDefinition: {
    basePath: getEnv('NODE_ENV') === 'development'
      ? '/'
      // Workaround required for API gateway as stage is in the URL
      : `/${getEnv('AWS_LAMBDA_STAGE')}`
  },
  apis: ['src/routes.js']
});

module.exports = {
  getEnv,
  appEnvs,
  swaggerSpec
};
