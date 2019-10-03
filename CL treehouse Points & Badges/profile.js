//Require https module
const https = require("https");
//Require http module for status_codes
const http = require("http");

//print message
function printMessage(userName, badges, points){
    const message = `${userName} has ${points} points and ${badges} badges in Javascript.`;
    console.log(message);
}

//print error message
function printError(error)
{
    console.log(error.message);
}

//main code
function get(username){

    try{
        //connect to the api url (https://teamtreehouse.com/username.json)
        const request = https.get(`https://teamtreehouse.com/${username}.json` , response=>{
            if(response.statusCode===200)
            {
                //console.log(response.statusCode);
                //console.dir(response);
                
                //get the data as/in json format-string
                let body="";
                response.on('data', d => {
                    //console.log(d.toString());
                    body+=d.toString();
                });

                response.on('end' , ()=>{ 
                    try{
                        //parsing - string to dataStructure
                        //console.log(body);
                        const profile = JSON.parse(body);
                        //console.log(profile);

                        //print it to the console
                        const userName = profile.name;
                        const badges = profile.badges.length;
                        const points = profile.points.total;
                        printMessage(userName , badges , points); 
                    }catch(e){
                        //console.error(e.message);   //-handle error message in a function
                        printError(e);
                    }
                            
                });
            }
            else
            {
                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);


            }

        });

        request.on('error' , error=>{
            console.error(`Problem with request: ${error.message}`);
        })

    }catch(error){
        //console.error(error.message);   //-handle error message in a function
        printError(error);
    }

}


//module.exports.get = get;
module.exports = {
    get
}
//both are the correct ways