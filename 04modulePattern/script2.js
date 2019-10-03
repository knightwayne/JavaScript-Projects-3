

//clustering the global namespace
//i dont have access to any attr or meth globally;
//only localObject and can reach its methods and attributes;
//can't access localObject2 and its attr and meth; 
var Module2 = (function(){
   
    var localObject = {
        a : 10 ,
        b : 12,
        /*foo : function(){
            console.log("Module 2 Export Public!");
        }*/
     };
    var localObject2 = { 
        a : 15 ,
        b : 20
    };

    localObject.foo = function foobar(){
        console.log("Module 2 Export Public!");
    };
    localObject2.foo2 = function foobar(){
        console.log("Module 2 Export Private!")
    };

    return localObject;

}());










/*(function(underscore){

    underscore.newAttr = "yay! ohNO";
    underscore.newMeth = function meth(){
        console.log("hey man!");
    }
    console.log(underscore.VERSION);

}(_));*/