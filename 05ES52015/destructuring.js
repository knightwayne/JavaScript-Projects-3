
'use strict'

let cart = {
    item1: "veggies" , 
    item2: "lamp" , 
    item3: "java"
}

let {item1 , item2} = cart;

console.log(item1 , item2);
//console.log(item1 , item2 , item3); //item3 not defined

let arr = [1,2,3,4,5,6,7];

let [z , x , c , ...v] = arr;
console.log(z);
console.log(x);
console.log(c);
console.log(...v);  //4,5,6,7
console.log(v);     // [4,5,6,7]