
'use strict'

/*var Student = function(data){   //data passed as an object
    this.name=data.name;
    this.age=data.age;
}*/

/*class Student{
    constructor(data){
        this.name=data.name;
        this.age=data.age;
        this.iq = data.iq || 5;
    }
}*/

class Student{
    constructor({name , age , iq = 5} = {}){
        this.name = name;
        this.age = age;
        this.iq = iq;
    }
}

let abc = new Student({name: "abc" , age: 8});
let def = new Student({name: "def" , age: 18 , iq: 10});

console.log(abc , def);