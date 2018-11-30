var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('connection', function(username, room){
    console.log(username + " is connected.");
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(username, msg, room){
    console.log('message: ' + msg);
  });

  socket.on('chat message', function(username, msg, room){
    io.emit('chat message', username, msg, room);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
