var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    for (var i = 0; i < 1000; i++)
    {
        response.write("Hello World! ahihi ahihi " + i + "\n");
    }
    response.end("Hello World! ahihi ahihi");

});

var port = 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
