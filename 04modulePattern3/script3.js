
//import export in javascript
//doesnt work inside module pattern - IIFE

var ab = 45;
var cd = function(){
    console.log("function to be exported");
}
var ef = "plant trees";
var sum = function(a,b){
    console.log(a+b);
}
export { ab , cd , sum};

