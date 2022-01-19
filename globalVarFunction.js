
var myVar1="Kishan";
//var myVar2="Aniruddh";      // global scope
function useVar1(){
  myVar2="Aniruddh";   //without declaring any keyword it is used as global automatically  
}
function useVar2(){
  var output1="Karena ";
  var output2="Desai ";
  if(myVar1 != undefined)
    { output1+=myVar1;
      console.log(output1);
    }
  if(myVar2 != undefined)
    { output2+=myVar2;
      console.log(output2);
    }
}
   useVar1();
   useVar2();


//    Global scope vs Local Scope

var myVar = 10;   //Global Scope
function  useVar(){
  var myVar=100;  // Local Scope
  
  return myVar;
}
console.log(useVar());
console.log(myVar);