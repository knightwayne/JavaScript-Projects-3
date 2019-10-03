
//Problem: enter usernames from command line, and display their badges and points.
//Solution: treehouse's api - get username info, and show/render it on screen, using node.js

const profile = require("./profile.js");

//user input
let users = process.argv.slice(2);
users.forEach(profile.get);

//console.log(process.argv);    -need to slice the array;
//let users = ['chalkers' , 'alenaholligan'];
//users.forEach(getProfile);

// users.forEach( username=>{
//     getProfile(username);
// })
