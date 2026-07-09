
// object is laptop and inside this curly brace is called properties

const laptop = {
    model: 'xxx',
    color: 'white',
    price:'60K'
}


console.log(laptop)  
console.log(laptop.color)  // we can access property by this method



// Variables
/* To declare variable we have 3 keywords VAR, CONST, LET*/
// we use LET  or CONST for new version , old version use VAR

let language = 'JavaScript';
console.log(language);

// const is constant it cann't change further if assigned value
const secondInMinute = 60;
// secondInMinute = 70;  // -> not allow

// functions-scope
var language_name = 'JavaScript'; // now it is global scope

// LET is block-scope
/*
block_scope()
{
    code under block
}
    */

if (true){
    // let age = 21;
    var age = 25
}
console.log(age); // error bcz age defined inside block and happen with both let and const
console.log(age); // not error bcz defined with var and it is function scope



