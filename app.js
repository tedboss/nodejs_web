var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Emitter = require('./event-emitter');
var robot_controller = require('./robot-controller');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    
    socket.on('chat message', function(msg){
        console.log('Command: ' + msg);
        robot_controller.executeCommand(msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});