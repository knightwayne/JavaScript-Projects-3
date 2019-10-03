
'use strict'


//map
function list(classroom){
    console.log(classroom);
}

let classroom1 = new Map();

let a1 = {name: "arnav" , age: 16};
let b1 = {name: "ishaan" , age: 20};
let c1 = {name: "nightwayne" , age: 25};

classroom1.set('a1',a1);
classroom1.set('b1',b1);
classroom1.set('a1',a1);
classroom1.set('c1',c1);
classroom1.set('a1',a1);
classroom1.set('b1',b1);
console.log(`Size of classroom1 is : ${classroom1.size}`);
console.log("b1: " , classroom1.get('b1'));
list(classroom1);

classroom1.delete('b1');
console.log(`Size of classroom is : ${classroom1.size}`);
console.log("ishaan: " , classroom1.get('ishaan'));
list(classroom1);