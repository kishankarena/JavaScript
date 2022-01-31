const screen = document.querySelector('#screen');
screen.innerText=0;
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');

let screenVal = '';
let checkDot = false;
number.forEach(number=>{
    number.addEventListener('click',num=>{
         if(num.target.innerText === '.' && !checkDot)
         {
             checkDot = true;
         }
         else if(num.target.innerText === '.' && checkDot)
         {
             return;
         }
        screenVal+=num.target.innerText;
        screen.innerText+=num.target.innerText;

    })
})
operator.forEach(operator=>{
    operator.addEventListener('click',op=>{
        screenVal+=op.target.value;
        screen.innerText+=op.target.innerText;
    })
})
function screenClear(){
     
    screen.innerText=0;
    screenVal='';
    checkDot = false;

}
function backSpace(){
    let bckSpc = screen.innerText;
    screen.innerText = bckSpc.substring(0,bckSpc.length-1);
    screenVal = screenVal.substring(0,screenVal.length-1);  
}
function equal(){
    if(screenVal === '')return;
let result = screenVal;
screen.innerText = eval(result);
    
}