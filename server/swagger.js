const swaggerJSDoc = require('swagger-jsdoc');
const { port } = require('./config');

module.exports = swaggerJSDoc( {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'CYAN-FINANCE API',
      version: '1.0.0',
      description: '',
    },
    host: `localhost:${port}/v1`,
  },
  apis: ['./router/*.js', './*.yaml'],
});