
//
// var Module = (function(){

// })();
// }());


//clustering the global namespace
var Module = (function(){
    
    function foo(){
    console.log("Hey there! Access me through global scope!");
    }

    foo();

}());
