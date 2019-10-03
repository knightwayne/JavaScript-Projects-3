
(function(){

    let area = function(length , breadth){
        console.log(`The area is : ` , length*breadth);
    }
    
    let perimeter = function(length , breadth){
        console.log(`The perimeter is : ` , 2*(length+breadth));
    }

    module.exports = {
        area        //but not perimeter
    }
    //console.dir(area);
    //console.dir(perimeter);
    console.dir(module.exports);

})();




// let area = function(length , breadth){
//     console.log(`The area is : ` , length*breadth);
// }

// let perimeter = function(length , breadth){
//     console.log(`The perimeter is : ` , 2*(length+breadth));
// }

// module.exports = {
//     area
// }