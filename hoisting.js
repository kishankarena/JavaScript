// Function hoisting
displayName("Andrew");
function  displayName(name){
    console.log(name)
}


//var hoisting
console.log(myVar);  //undefined
var myVar = 10;


//let hoisting
// console.log(myLet);
let myLet = 12;    //hoisting.js:10 Uncaught ReferenceError: Cannot access 'myLet' before initialization

// const hoisting
// console.log(myConst);   Uncaught ReferenceError: Cannot access 'myConst' before initialization
const myConst = 100 ;