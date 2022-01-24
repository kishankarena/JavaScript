// // Synchronous - JavaScript run code top to the bottom
// console.log("I");
// console.log("eat");
// console.log("ice-cream");
// console.log("with a");
// console.log("spoon");

// //Asynchronous system

// console.log("I");
// console.log("eat");

// setTimeout(()=>{console.log("ice-cream");},4000);

// console.log("with a");
// console.log("spoon");

// Callback
function one (call_two){
    console.log("step 1 is completed : call step 2");
    call_two();
}
function two (){
    console.log("step 2 ");
}
one(two); // call one function from another function
