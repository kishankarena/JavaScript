const screen = document.querySelector('#screen');
screen.innerText = 0;
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const dropFunction = document.querySelectorAll('#dropFunction');
const trigonometry = document.querySelectorAll('#trigonometry');
const deg = document.querySelector('.deg');
const changeBtn = document.querySelectorAll('#changeBtn');
const secondBtn = document.getElementById('secondBtn');
const mathFunction = document.querySelectorAll('.mathFunction');
const memoryBtns = document.querySelectorAll('.memoryBtns');

let screenVal = '';
let checkDot = false;
let checkTrigono = false;
let checkFunction = false;
let checkDegree = true;
let checkSecond = true;
let memory = [];
// numbers
number.forEach(number => {
    number.addEventListener('click', e => {
        if (e.target.innerText === '.' && !checkDot) {
            checkDot = true;
        }
        else if (e.target.innerText === '.' && checkDot) {
            return;
        }
        screenVal += e.target.innerText;
        if (checkTrigono) {
            screen.innerText = checkTrigono + screenVal;
        }
        else if (checkFunction) {

            screen.innerText = checkFunction + screenVal;
        }
        else {
            screen.innerText = screenVal;
        }

    })
})
//Operators
operator.forEach(operator => {
    operator.addEventListener('click', e => {
        screenVal += e.target.value;
        screen.innerText = screenVal;
    })

})
// Dropdown Functions
dropFunction.forEach(dropFunction => {
    dropFunction.addEventListener('click', e => {
        e = e.target.innerText;
        if (e == 'random') {
            screen.innerText = Math.random().toFixed(4);
        }
        else {
            checkFunction = e;
            screen.innerText = checkFunction
        }

    })
})
function calculateFunction(mathFunc, value) {
    switch (mathFunc) {
        case 'ceil':
            return Math.ceil(value);
            break;
        case 'floor':
            return Math.floor(value);
            break;
        case 'trunc':
            return Math.trunc(value);
            break;

    }
}
// set degree
deg.addEventListener('click', e => {
    if (checkDegree) {
        e.target.innerText = 'RAD';
        checkDegree = false;
    }
    else {
        e.target.innerText = 'DEG'
        checkDegree = true;
    }
})

// Trigonometry Functions

trigonometry.forEach(trigonometry => {

    trigonometry.addEventListener('click', e => {

        e = e.target.innerText;
        checkTrigono = e;
        screen.innerText = checkTrigono;

    })
})

function calculateTrigono(trigoFunc, degree) {
    if (checkDegree) {
        degree = degree * Math.PI / 180;
    }
    else {
        degree = degree;
    }
    switch (trigoFunc) {
        case 'sin':
            screenVal = Math.sin(degree);
            screen.innerText = screenVal;
            break;
        case 'cos':
            screenVal = Math.cos(degree);
            screen.innerText = screenVal;
            break;
        case 'tan':
            screenVal = Math.tan(degree);
            screen.innerText = screenVal;
            break;

    }
}

// change Buttons
function changeBtnText() {
    if (checkSecond) {
        secondBtn.innerHTML = '1<sup>st</sup>';
        checkSecond = false;
        changeBtn.forEach(changeBtn => {
            let btnVal = changeBtn.value;


            switch (btnVal) {
                case 'xpow2':
                    changeBtn.innerHTML = 'x<sup>3</sup>';
                    changeBtn.value = 'cube';
                    break;
                case 'sqrt':
                    changeBtn.innerHTML = '&#8731;';
                    changeBtn.value = 'cbrt';
                    break;
                case 'pow':
                    changeBtn.innerHTML = '2<sup>x</sup>';
                    changeBtn.value = 'exp2';
                    break;
                case 'exp10':
                    changeBtn.innerHTML = 'x10<sup>y</sup>';
                    changeBtn.value = 'xexp10';
                    break;
                case 'log10':
                    changeBtn.innerHTML = 'log1p';
                    changeBtn.value = 'log1p';
                    break;
                case 'log':
                    changeBtn.innerHTML = 'log2';
                    changeBtn.value = 'log2';
                    break;

            }
        })

    }
    else {
        secondBtn.innerHTML = '2<sup>nd</sup>';
        checkSecond = true;
        changeBtn.forEach(changeBtn => {
            let btnVal = changeBtn.value;

            switch (btnVal) {
                case 'cube':
                    changeBtn.innerHTML = 'x<sup>2</sup>';
                    changeBtn.value = 'xpow2';
                    break;
                case 'cbrt':
                    changeBtn.innerHTML = '&radic;';
                    changeBtn.value = 'sqrt';
                    break;
                case 'exp2':

                    changeBtn.innerHTML = 'x<sup>y</sup>';
                    changeBtn.value = 'pow';
                    break;
                case 'xexp10':
                    changeBtn.innerHTML = '10<sup>x</sup>';
                    changeBtn.value = 'exp10';
                    break;
                case 'log1p':
                    changeBtn.innerHTML = 'log';
                    changeBtn.value = 'log10';
                    break;
                case 'log2':
                    changeBtn.innerHTML = 'ln';
                    changeBtn.value = 'log';
                    break;

            }
        })

    }
}
// Math Function
mathFunction.forEach(mathFunction => {
    mathFunction.addEventListener('click', e => {
        e = e.target.value;

        switch (e) {
            case 'FE':
                screen.innerText = Math.pow(10, screen.innerText);
                break;
            case 'E':
                screenVal += Math.E.toFixed(5);
                screen.innerText = screenVal;
                break;
            case 'xpow2':
                screenVal = Math.pow(screenVal, 2);
                screen.innerText = screenVal;
                break;
            case 'inverse':
                screenVal = eval(1 / screenVal).toFixed(4);
                screen.innerText = screenVal;
                break;
            case 'modx':
                if (screenVal < 0) {
                    screenVal = (-1) * screenVal;
                    screen.innerText = screenVal;
                }
                break;
            case 'exp':
                screenVal = Math.exp(screenVal).toFixed(3);
                screen.innerText = screenVal;
                break;
            case 'sqrt':
                screenVal = Math.sqrt(screenVal).toFixed(5);
                screen.innerText = screenVal;
                break;
            case 'fact':
                screenVal = factorial(screenVal);
                screen.innerText = screenVal;
                break;
            case 'pow':
                screenVal = screenVal + '**';
                screen.innerText = screenVal;
                break;
            case 'exp10':
                screenVal = Math.pow(10, screenVal);
                screen.innerText = screenVal;
                break;
            case 'log10':
                screenVal = Math.log10(screenVal).toFixed(4);
                screen.innerText = screenVal;
                break;
            case 'log':
                screenVal = Math.log(screenVal);
                screen.innerText = screenVal;
                break;
            case 'cube':
                screenVal = Math.pow(screenVal, 3);
                screen.innerText = screenVal;
                break;
            case 'cbrt':
                screenVal = Math.cbrt(screenVal);
                screen.innerText = screenVal;
                break;
            case 'exp2':
                screenVal = Math.pow(2, screenVal);
                screen.innerText = screenVal;
                break;
            case 'xexp10':
                screenVal = screenVal + '*10**';
                screen.innerText = screenVal;
                break;
            case 'log1p':
                screenVal = Math.log1p(screenVal).toFixed(4);
                screen.innerText = screenVal;
                break;
            case 'log2':
                screenVal = Math.log2(screenVal).toFixed(4);
                screen.innerText = screenVal;
                break;

        }
    })
})
// factorial function
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
// PI function 
function calculatePi() {
    screenVal += Math.PI.toFixed(5);
    screen.innerText = screenVal;
}
// plusOrMinus Function
function plusOrMinus() {

    screenVal = (-1) * screenVal;
    screen.innerText = screenVal;



}

//  Memory Section

memoryBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e = e.target.innerText;
        switch (e) {
            case 'MC':
                for (let i = 0; i < memory.length; i++) {
                    memory.pop();
                }
                console.log(memory);
                break;
            case 'MR':
                memory = memory.reduce((sum, cur) => {
                    sum += cur;
                    return sum;
                }, 0);
                screen.innerText = memory;
                console.log(memory);
                break;

            case 'M+':
                memory.push(parseFloat(screen.innerText));
                console.log(memory);
                break;
            case 'M-':
                memory.push((-1) * parseFloat(screen.innerText));
                console.log(memory);
                break;

            case 'MS':
                memory.push(parseFloat(screen.innerText));
                console.log(memory);
                break;

        }


    })
})

// Clear Screen

function screenClear() {

    screen.innerText = 0;
    screenVal = '';
    checkDot = false;
    checkTrigono = false;
    checkFunction = false;
    checkDegree = true;

}
// BackSpace
function backSpace() {
    let bckSpc = screen.innerText;
    if (screen.innerText == 0) return;
    screen.innerText = bckSpc.substring(0, bckSpc.length - 1);
    screenVal = screenVal.substring(0, screenVal.length - 1);
}

//Equal Function
function equal() {

    if (screenVal === '') return;
    if (checkTrigono) {

        let result = calculateTrigono(checkTrigono, parseFloat(screenVal));
        screen.innerText = result.toFixed(4);
        checkTrigono = false;
    }
    else if (checkFunction) {
        let result = calculateFunction(checkFunction, screenVal);
        screen.innerText = result;
        checkFunction = false;
    }
    else {
        let result = screenVal;
        screen.innerText = eval(result);
    }

}