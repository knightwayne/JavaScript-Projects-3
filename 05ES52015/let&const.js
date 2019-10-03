
'use strict'

//LET & CONST
var x = 10;

function foo()
{
    const x = 5;
    console.log(x);
}

//calling the function
foo();

//calling in the global scope
console.log(x);
