const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const { mongoHost, mongoPort, mongoDB, port } = require('./config.js');

const router = require('./router/');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

server.listen(port, () => {
  console.log(`Server has been started! http://localhost:${port}`);
});
