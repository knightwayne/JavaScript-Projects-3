
//problem - cmd line i/p , url - json - extract data - o/p
'use strict'

//import reqd. modules
var https = require('https');
var http = require('http');

//aux functions
function printMessage(username , badges , points){
    console.log(`User ${username} has ${badges} badges and ${points} points at Treehouse Community`);
}
function printError(e){
    console.error(e.message);
}

//main function
function get(username){

    //connect with the API url
    
    let url = `https://teamtreehouse.com/${username}.json`
    https.get(url , response=>{
        if(response.statusCode===200)
        {
            let body = "";
            //read the data
            //response.on... ---these are all system events
            response.on('data' , d=>{
                //d is in buffer format, needs to be converted into string
                body+=d.toString();
                //console.log(body);
            })

            response.on('end' , ()=>{

                //  here also a try...catch comes

                //parse the data
                const profile = JSON.parse(body);
                //console.dir(profile);

                //print the data
                const userName = profile.name;    
                const badges = profile.badges.length;
                const points = profile.points.total;
                printMessage(userName , badges , points); 
            })

        }
        else{
            const message = `There was an error for ${username} (${http.STATUS_CODES[response.statusCode]})`;
            const e = new Error(message);
            printError(e);
        }
    }).on('error' , e=>{    //http get function end
        printError(e);
    })  
}  //main get function end


try{
    let users = process.argv.splice(2);
    users.forEach(person => {
        get(person);
    });
}catch(e){
    printError(e);
}





//-----------------testing-------------------
//printMessage('chalkers' , 409 , 1072523);
//get('chalkers');
//-----------------testing-------------------
