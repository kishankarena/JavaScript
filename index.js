// (function(){
//     console.log("Welcome");
// })();
let abcd = 11;
function add(a){
    let abc = 10 ;
    return function (b){
        if(b) return add(a+b);
        return a;
        
    }
}
console.log(add(3)(4)(5)(6)(7)(9)()); 
