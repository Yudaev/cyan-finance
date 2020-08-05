const isProduction = process.env.NODE_ENV === 'production';

const {
    PORT: port,
    MONGO_HOST: mongoHost,
    MONGO_PORT: mongoPort,
    MONGO_DB: mongoDB,
    TOKEN: tokenSecret,
    SALT_ROUNDS: saltRounds,
} = process.env || {};

module.exports = isProduction
  ? {
    port,
    mongoHost,
    mongoPort,
    mongoDB,
    tokenSecret,
    saltRounds,
  }
  : require('./config.json');
