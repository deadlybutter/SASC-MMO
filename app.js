var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("t"); 
});

var PORT = 3000 || process.env.PORT;
server.listen(PORT, function() {
    var host = server.address().address;
    console.log("fixes stupid editor starting console line blah and no slash n doesnt work");  
    console.log('listening at http://%s:%s', host, PORT);
});