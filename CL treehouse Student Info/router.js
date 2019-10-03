
'use strict'
const profile = require('./profile.js');

//2-handle http route for GET / and POST /(-search)

function homeRoute(request , response){
    // if url===/ & GET
        if(request.url==="/"){
        //show search
        response.writeHead(200 , {'Content-type' : 'text/plain'});
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
    }

    // if url===/ & POST
        //redirect to /:username
}

//3-handle http route for GET /:username

function userRoute(request , response){
    //if url===/...
    var username = request.url.replace("/" , "");
    if(username.length>0){

        response.writeHead(200 , {'Content-type' : 'text/plain'});
        response.write("Header\n");

        //get json data from treehouse
        var studentProfile = new profile(username);
        console.log(typeof studentProfile);
        //on "end" show profile
        studentProfile.on('end' , function(JSONprofile){

            var values = {
                'avatar-url': JSONprofile.gravatar_url,
                'username': JSONprofile.profile_name,
                'badge': JSONprofile.badges.length,
                'js-points': JSONprofile.points.Javascript
            }
        })
        response.write(values.username+" has " + values.badge + " badges\n");
        response.end("Footer\n");

        //on error report error
        studentProfile.on('error' , function(error){
            response.end("Footer\n");
        })
        
        
            
    }
}


module.exports.home=homeRoute;
module.exports.user=userRoute;