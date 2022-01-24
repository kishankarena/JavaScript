let fname = "Andrew";
let age = 18;

// In ES5 use string concatenation
 console.log("My name is "+fname+". My age is "+age+".");

//  In ES6 use string template
console.log(`My name is ${fname}. My age is ${age}.`);

//  we can add also expression.
let a=10;
let b=20;
console.log(`Sum is ${a+b}`);


// Template strings method
console.log(`${fname}`.startsWith('k'));
console.log(`${fname}`.endsWith('w'));
console.log(`${fname}`.includes('erw'));
console.log(`${fname} `.repeat(5));

// do like too
let name = `${fname}   `;
console.log(name.repeat(5));