// const profile = require('./profile');
// profile.get('chalkers');
// profile.get('davemcfarland')

'use strict'
//problem - display student profile info on a dynamic webpage using name search bar, from web browser
//solution - use node.js to look up for user information and serve our template via http

const http = require('http');
const router = require('./router.js');

//1 - create a web server

http.createServer((request , response)=>{

    /*setInterval(function(){
        response.write(new Date()+ "\n");
        response.write("\n");
    }, 2000);*/
    router.home(request,response);
    router.user(request,response);

}).listen(8081);
console.log('Server running on http://localhost:8081/');


//4-function that handles the reading of files and renders after extracting data
    //read from file --> get the string
    //merge values into string 













