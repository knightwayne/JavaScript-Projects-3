
var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

/*


//creating the server
var http = require('http');


var fs = require('fs');

var data = fs.readFileSync('input.txt');

//create server
http.createServer(function(request , response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var data = fs.readFileSync('input.txt');
    //response.end("Hello World!!!\nTell me why, Ain't Nothing But A HeartAche!\n");
    response.end(data.toString());

}).listen(8081);

//testing request and response
console.log("Server running at http://localhost:8081/");
console.log(__dirname);

*/