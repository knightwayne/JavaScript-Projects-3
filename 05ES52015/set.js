
'use strict';

//set
function list(classroom){
    console.log(classroom);
}

let classroom = new Set();

let a = {name: "arnav" , age: 16};
let b = {name: "ishaan" , age: 20};
let c = {name: "nightwayne" , age: 25};

classroom.add(a);
classroom.add(b);
classroom.add(a);
classroom.add(c);
console.log(`Size of classroom is : ${classroom.size}`);
list(classroom);

classroom.delete(b);
console.log(`Size of classroom is : ${classroom.size}`);
list(classroom);

//creating array from set
var arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

//creating set from array
let setOfStudents = new Set(arrayOfStudents);
list(setOfStudents);