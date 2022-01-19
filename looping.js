let myArr=[2,5,8,6,1,12,9];
let  output = 0 ;
 function addArrayNum()
{
//   using while loop
  // let i = 0;
  // while(i<myArr.length){
  //   output += myArr[i];
  //   i++;
  // }
  
//   Using For loop
  for(let i=0;i<myArr.length;i++){
    output += myArr[i];
  }
   
  
  console.log(output);
}
addArrayNum();