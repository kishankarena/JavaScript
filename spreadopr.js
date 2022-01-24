function sum (a,b,c){
    console.log(a+b+c);

}
let myArr = [5,8,9];
sum(...myArr);


// use spread operator in concatenation
let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr1 = [...arr1 , ...arr2];
console.log(arr1);

// replace copy()
let myArr1 = [1,2,3];
// let myArr2 = myArr1 ; 
// myArr2.push(4,5);
// console.log(myArr2);
// console.log(myArr1); // 4 & 5 also pushed here also


// to overcome it use spread operator to copy of arrays
let myArr2 = [...myArr1];
myArr2.push(4,5);
console.log(myArr2);
console.log(myArr1);

