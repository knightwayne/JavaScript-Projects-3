
'use strict'

//rest
//rest params must be the last argument
//params - the rest parameter gathers the rest of the arguments after first 2;
function func(name , age , ...params){
    console.log(name , age , params );
}

func('abc' , 7 , 'alp' , "bet" , 11 , "gam" );

//spread

const arr1 = [1,4,5];
const arr2 = [10,50,70];
//using spread here
const arr3 = [11 , 250 , ...arr1 , 78 , ...arr2 , 456];
console.log(arr3);