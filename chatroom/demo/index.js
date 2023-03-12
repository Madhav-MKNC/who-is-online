const express = require('express');
const app = express();
app.use('.', express.static(__dirname + '.'));
app.use(express.urlencoded());

const http = require('http');
const server = http.createServer(app);

let users = {}

const io = require('socket.io')(server);
console.log('server started');
// socket server
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log(`${users[socket.id]} leaved`);
    socket.broadcast.emit('user leaved', `${users[socket.id]} leaved`);
  });

  socket.on('user message', (sender, msg) => {
    socket.broadcast.emit('um', sender, msg);
  });

  socket.on('user name', (name) => {
    users[socket.id] = name;
    console.log(name, ' connected');
    console.log(`${users[socket.id]}'s id :`, socket.id);
    socket.broadcast.emit('un', name);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

app.get('./send icon.svg', (req, res) => {
  res.sendFile(__dirname + '/sendIcon.svg');
})

server.listen(8000, () => {
  console.log('server running on port 8000');
});