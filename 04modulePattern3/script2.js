
//WITH MODULE PATTERN

//2 types of function declarations
//1> var foo = function(){ code }
//2> function foo(){ code }
//both are accessed using foo(argument if any)

//self executing anonymous function - the most basic module pattern
//inside bracket means function gets evaluated as expression immediately

//declaration 1
(function(){
    function foo(){ 
        console.log('foo with module pattern');
    };
    
    foo();
}());


//declaration 2
var firstModule = (function(){
    function foo2(){ 
        console.log('foo2 with module pattern and return ');
    };
    a=49;
    b=100;
    return {foo2, b};
}());


//declaration 3
var firstModule = (function(){
    var ret={};
    function foo2(){ 
        console.log('foo2 with module pattern and return ');
    };
    ret.a=49;
    ret.b=function(){
        console.log("tree");
    };
    return {ret};
}());

//WITHOUT MODULE PATTERN
var foo1 = function(){
    console.log("foo1 without module pattern");
}

//calling the function from the file
//if we define another foo in console with a new value
//this foo gets overridden
foo1();