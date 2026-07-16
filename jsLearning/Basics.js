
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

// const name = 30;

/* Interview pov imp */
// Hoisting
// console.log(greeting);   // undefined special data types
var greeting = 'Hello';  // applicable only in var ,not in (const and let)

// use const and let , var is old

const num = 45;
console.log(num);

/* JS_7 */

// e.g of dynamic typing

let my_age = 15;
my_age = 'Sandipan'

console.log(my_age)

/* Primitive datatypes : single value can be stored . e.g- True/False, String etc*/
// 1. Number : decimal numbers, +ve number -ve number
let Age = 25;
let temp = -25;
let price = 50.50;

// 2. String: textual data
let name = 'Sandipan';

// 3. Boolean : True/False
let isLearningJS = true;
let isFinish = false;
let hasPermission = false;


// 4. undefined ?? Those variables did not assign any value 

let myName
console.log(myName); // Showing undefined

// 5. BigInt: max safe integer 

console.log(Number.MAX_SAFE_INTEGER) // [(2**53) -1]
console.log(Number.MIN_SAFE_INTEGER)  // -2**53
// using BigInt we can store more than max_safe value


/* 2. Structural Datatypes */
// 1. object 
//   1.1 Functions : Non-data structure
//   1.2 Arrays : collection of values (dynamic type like Python language)
// we can store objects also.
const number = [2,3,4,5,'JS','Python',{name:'sandipan',age:21,Gender:'Male'}]
console.log(number[6].Gender)
//   1.3 Maps
//   1.4 Set
//   1.5 Date

//   3. Structural root
        // 3.1 null

/* Operators */
// Assignment Operators
let y =  {name:'sandip'}
x = 10
z = 20
console.log(y.name, x ,z)



// Conditional Operators(Ternary Operators)
let userRole = 'Admin';

select_role = userRole === 'Admin' ? 'You are an Admin' : 'You are not an Admin';

console.log(select_role)

/* NOTE: === is the strict equality and !== is strict inequality */

// 4 == "4" → true (coercion)  

// 4 === "4" → false (strict — no coercion) 

/* Comparision Operator  */

// ===     Strict Equal

// !==     Strict Not Equal

// ==      Loose Equal

// !=      Loose Not Equal

// >       Greater Than

// <       Less Than

// <=      Lesser Than or Equal

// >=      Greater Than or Equal

/* Coercion is the process of converting data */
console.log(4 == '4') // true bcz of losse equal
console.log(4 === '4') // false of strict equal

console.log(3+10*3)
console.log((3+2)*8)

console.log(3 > 2 && 2 > 1)
console.log(3 > 2 > 1)



