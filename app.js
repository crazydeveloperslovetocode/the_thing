/**
 * Created by Logos on 2017-06-05.
 */
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World deploy test\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
const port = process.env.PORT || 5000
server.listen(port);



// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:/"+port);