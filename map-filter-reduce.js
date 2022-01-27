// [].map()
const values = [5,1,6,7,2];
const double = function(val){
    return val*2;
}
const doubleOfValue = values.map(double);
console.log(doubleOfValue);

// OR 

const binary = values.map((val)=>val.toString(2)); // also directly pass function from it.
console.log(binary);

// [].filter()
function IsEven(val){
    return val%2 === 0;
}
const even = values.filter(IsEven);
console.log(even);

// OR

const greaterThanFour = values.filter((val)=>val>4);
console.log(greaterThanFour);

//[].reduce

const sumOfValues  = values.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(sumOfValues);