var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var arr = [];
var people = {};
var storedmsg =[]
var dummy = {}
server.listen(8000);
console.log("server running on port 8000");

app.get("/user1", function(req, res) {
  res.sendfile(__dirname + "/user1.html");
});

app.get("/user2", function(req, res) {
  res.sendfile(__dirname + "/user2.html");
});

app.get("/user3", function(req, res) {
  res.sendfile(__dirname + "/user3.html");
});

io.on("connection", function(socket) {
  console.log("user connected")
  socket.on("storeClientInfo", function(data) {
    console.log("ddddddd",data)
    people[data.userId] = socket.id;
    console.log("people", people);
  if(storedmsg.length > 0){
    console.log("storedmsg", storedmsg);
    storedmsg.forEach(function(entry) {
      console.log('for each',entry);
      let SocketId = entry.toUserId;
      sendStoredmsg(SocketId,entry)

  });
  }
  });

  function sendStoredmsg (SocketId,entry){
    io.sockets.in(people[SocketId]).emit("storedmsg", entry);
  }


  socket.on("chatmsg", function(data) {
    yourFunction(data, people);
  });

  function yourFunction(data, people) {
    let check = people[data.toUserId]
    console.log("check...",check)
    if(check === undefined){
      console.log("check...",check)
      storedmsg.push(data)
    }else{
      let SocketId = data.toUserId;
      io.sockets.in(people[SocketId]).emit("message", data);
    }

  }


 


});

app.get("/getuser1msg", function(req, res) {
  console.log("arr", arr);
  res.send(arr);
});
