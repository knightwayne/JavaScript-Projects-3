
//creating the server
var http = require('http');

//create server
http.createServer(function(request , response){

    //request sends additional info. as queryString

    //http header
    //response.writeHead(200, {'Content-Type': 'text/plainl'});
    
    //writing in the file
    //response.write("Hello World!!!\nTell me why, Ain't Nothing But A HeartAche!\n");
    //response.end();
    
    //http header
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    //writing in the file
    response.write("<center><h1>Hello World!!!</h1><br><h2>Tell me why, Ain't Nothing But A HeartAche!<h2><center>");
    response.write(request.url);
    response.end();

}).listen(8081);

//testing request and response
console.log("Server running at http://localhost:8081/");
console.log(__dirname);