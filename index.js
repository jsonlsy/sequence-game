import socket from './server/socket';

const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

const publicPath = path.join(__dirname, 'client/dist');
app.use(express.static(publicPath));
app.get('/', (_req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

socket.listen(server);

server.listen(process.env.PORT || 8081, () => {
  console.log(`Listening on ${server.address().port}`);
});
