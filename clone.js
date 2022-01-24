const MATH_OBJECT= {
    PI =  3.14,
    SIGMA = 100
 };
 // copied new object with different reference|| clone it
const newObj = {
    ...MATH_OBJECT
};
//or creating another object 

 const{PI, SIGMA} = MATH_OBJECT;

 const newObj2 = {
     PI = PI,
     SIGMA = SIGMA
 };
 
//ES7
 const newObj3 = {PI,SIGMA};

