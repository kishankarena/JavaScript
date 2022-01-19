var myVar=10;
function checkValue(num){
  if(num){
    return "Value is:" + num;
    
  }
  return "Value is not assigned";
}
console.log(checkValue(myVar)); // Value is:10
//console.log(checkValue()); //Value is not assigned
  

// Equality Operators
function checkEqual(num){
    if(num == 12){
        return "equal";
    }
    return "not equal";
}
console.log(checkEqual(10));

// Strict Equality operator ===

function compareVar(num1 , num2){
    if(num1 === num2){
      return "Equal";
    }
    return "Not Equal";
  }
  console.log(compareVar(10,"10")); //Equal and after changing in if "===" will be not equal


  // Returning boolean value from Function

function isGreater(a,b){
    return a>b ;
  }
  console.log(isGreater(99,8));