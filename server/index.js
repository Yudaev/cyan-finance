const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const { host, mongoHost, mongoPort, mongoDB, mongoUser, mongoPassword, port } = require('./config.js');
const router = require('./router/');

const mongoUserPassword = mongoUser ? `${mongoUser}:${mongoPassword}@` : '';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(
  `mongodb://${mongoUserPassword}${mongoHost}:${mongoPort}/${mongoDB}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

server.listen(port, () => {
  console.log(`Server has been started! http://${host}:${port}`);
});
