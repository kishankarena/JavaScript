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

