var myPat = {
  "a name" : " Jack",
  "color"  : "black",
  "type"  : "Dog"
  };
// var patColor = myPat.color;
// console.log(patColor);     //accessing prop usin . operator

// var patName = myPat["a name"];
// console.log(patName);           // Accessing using brackets 
 
// Updating property
// myPat.color = "white";
// console.log(myPat);
 
// Adding Property
// myPat.bark="bow-bow";
//console.log(myPat);

// Deleting Props
// delete myPat.type;
// console.log(myPat);
 

// Check Object Properties
function checkObj(checkProp){
  
  
  if(myPat.hasOwnProperty(checkProp)){
    return checkProp;
  }
  else{
    return "not found";
  }
}
// console.log(checkObj("bark"));
console.log(checkObj("type"));


// Computed Properties:
let fruit = prompt("Which fruit to buy?", "apple");
let num = prompt("number of items :");

let bag = {
  [fruit]: [num], // the name of the property is taken from the variable fruit
};

alert( bag.apple); 


//  for .... in loop
let employee ={ 
  name :  "Andrew",
  age : 25,
  isPermant : false
  };
  for (let key in employee)
    // alert(key); // name,age , isPermant
    // value of each key
    // alert(employee[key]); // Andrew,25,false