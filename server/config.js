const isProduction = process.env.NODE_ENV === 'production';

const {
    HOST: host,
    PORT: port,
    MONGO_HOST: mongoHost,
    MONGO_PORT: mongoPort,
    MONGO_DB: mongoDB,
    MONGO_USER: mongoUser,
    MONGO_PASSWORD: mongoPassword,
    TOKEN: tokenSecret,
    SALT_ROUNDS: saltRounds,
} = process.env || {};

module.exports = isProduction
  ? {
    host,
    port,
    mongoHost,
    mongoPort,
    mongoDB,
    mongoUser,
    mongoPassword,
    tokenSecret,
    saltRounds,
  }
  : require('./config.json');
