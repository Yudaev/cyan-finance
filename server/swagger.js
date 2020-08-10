const swaggerJSDoc = require('swagger-jsdoc');
const { host, port } = require('./config');

module.exports = swaggerJSDoc( {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'CYAN-FINANCE API',
      version: '1.0.0',
      description: '',
    },
    host: `${host}:${port}/v1`,
  },
  apis: ['./router/*.js', './*.yaml'],
});