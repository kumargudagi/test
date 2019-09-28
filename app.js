
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/user1', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/user2', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});

io.on('connection', function (socket){
  console.log('socket',socket.id);

   console.log('connection');

  socket.on('CH01', function (from, msg) {
    console.log('MSG', from, ' saying ', msg);
    sendnotice()

  });
 function sendnotice(){
    socket.emit('user-notices', 'notice ', 'notice');
  }

});

