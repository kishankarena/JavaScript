function sum(...inputs){
    let total = 0 ;
    // console.log(inputs); // displays array
    // console.log(...inputs); //displays values of array
    for (let i of inputs){
        total += i ;
    }
    console.log(total);

}
sum(1,2,3,4,5,6,7,8,9,10);

function random ( a,b,...c){
    console.log(...c);
}
random("Red", "Yellow","Green","Blue","White","Black");