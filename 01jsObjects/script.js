
// var dice ={
//     sides : 6 ,
//     roll : function(){
//         var val = Math.floor(Math.random()*this.sides)+1;
//         return val;
//     }
// }

// document.getElementById("button").addEventListener(
//     "click" , function(){
//         var val = dice.roll();
//         document.getElementById("display").innerHTML="<h1>" + val+ "</h1>"
// })


function Dice(side)
{
    this.sides = side ;
    this.roll =function(){
        var val = Math.floor(Math.random()*this.sides)+1;
        console.log(val);
        document.getElementById("display").innerHTML="<h1>" + val+ "</h1>"
    }

}

document.getElementById("button").addEventListener(
    "click" , function(){
        var dice15 = new Dice(15);
        dice15.roll();
})