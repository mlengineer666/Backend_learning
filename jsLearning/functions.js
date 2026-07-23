// Functions
/* to write function in js: (function_keyword function_name) */

// use function for dynamic type not hardcoded or static  

function login(username , password){
    console.log(`${username} Logged in successfully`)
}

user = 'John'
login(user)   // function called
login('Jane') // in js if we don't pass any parameter value it will undefined

/* inside function those parameter are local variable we can give any name there is no restriction */
function uppercase(str){
    return str.toUpperCase()
}

const result = uppercase('javascript')
console.log(result)


// calculate area
function calculateArea(width, height){
    const area = width * height;
    return area;
}

console.log(calculateArea(4,5))


// by usign default parameter we can override the parameters value from undefined to deafult 
function calculateArea(height, width = 1){
    const area = height * width;
    return area;
}

console.log(calculateArea(7))


// Variable Scope
function download(){
    // download logic goes here 
    const filename = 'xyz.pdf';
    console.log(filename);
}

download()

/* Function declaration and expression */
// declaration
function login(){

}


// expression

const login1 = function (){
    console.log('Logged In')
}

login1()

// Callback function
function formatText(text,formatCallBack){
    return typeof formatCallBack === 'function' ? formatCallBack(text) : text.toUpperCase();

}

const res = (formatText('javascript',function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}));

console.log(res);


// IIFE (Immediately invoked function expression)
// each and everywhere we have to manually call the function but here automatically 

// 1st way
(function setup(){
    console.log('setup done')
})();
// setup() // manually

// 2nd way
(function Setup(){
    console.log('Setup Done!')
}());



/* Arrow Function */
// 1.
const login2 = () => {
    console.log('Logged In !!!')
}
login2()

// 2.
const login3 = (username,password)=>{
    console.log(`${username}'s password is ${password}`)
}
login3('Sandipan',6290)


// 3.
const getDivision = (num1,num2)=> num2!=0? num1 / num2: `${num2} should be either -ve or +ve`
console.log(getDivision(3,0))

const getSum = (num1,num2)=> num1 + num2

console.log(getSum(4,6))