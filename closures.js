// Lexical Scoping in closure
function outerFunction(){
  let name ="kishan";
  function innerFunction(){
    alert(name);
  }
  innerFunction();
}
outerFunction();




// Returning innner Function from outer function scope it's same as above. 
function myName(){
    let name = "Kishan";
    function display(){
      alert(name);
    }
    return display;
  }
   let myfunc = myName(); // myfunc have reference of display
  myfunc();




  //refernce of inner Function

function addition(x){
    return function(y){
   
      return x+y;
    }
   
   }
   
   let add5 = addition(5);  // give reference returning function
   
   console.log(add5(4));

   //no need store reference of function
console.log(addition(5)(7));
   
   
   