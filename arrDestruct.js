 // Array Destructuring :  store array's value in distinct variable
const myPlayer = ["Dhoni","Kohli","Sachin","Hardik"];


// In ES5
var player1 = myPlayer[0];
var player2 = myPlayer[1];
console.log("My Captain is: "+player1);

// In ES6

let[plyer1,plyer2,plyer3,plyer4] = myPlayer;
console.log(`My Captain is ${plyer2}.`);

// if you want some those variable

let[captain,,,viceCaptain]=myPlayer;
console.log(`My Captain is ${captain}. My vice-captain is ${viceCaptain}.`)

// swap to numbers using array destructuring 

let val1 = 10;
let val2 = 55;

[val1,val2] = [val2,val1];
console.log(`Value of val1 is ${val1}. and Value of val2 is ${val2}`);