function x (){
    var a =7;
    function y(){
        console.log(a);
    }
    return y;

}
 var z =  x(); // variable z has reference of function y
 console.log(z);