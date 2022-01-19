
var myVar1=5;
var myVar2=10;     // global scope
// function useVar1(){
//   // myVar2=10; //without declaring any keyword it is used as global automatically  
// }
function useVar2(){
  var output1="";
  var output2="";
  if(myVar1 != "undefined")
    {  output1=myVar1;
      console.log(output1);
    }
  if(myVar2 != "undefined" )
    { output2=myVar2
      console.log(output2);
    }
}
// useVar1();
useVar2();