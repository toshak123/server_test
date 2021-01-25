var http = require('http');
const hostname = '0.0.0.0';
const port = 8000;

var app = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Hello World\n");
});

var io = require('socket.io')(app);

app.listen(port, hostname, function() {

    console.log('listening on *:8000');

});

setInterval(function() {

    /*
      our message we want to send to the client: in this case it's just a random
      number that we generate on the server
    */
    var msg = Math.random();
    io.emit('message', msg);
    console.log(msg);

}, 1000);