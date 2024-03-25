function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}
 
function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate (a, b, operator){
    switch (operator){
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default: 
            return "Invalid operator";
    }
}

function handleClick(event){
    console.log(event.target.classList + " clicked!");
}

function initialize(){
    const container = document.querySelector(".calculator");
    const buttons = container.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });
}

// Set event listeners
initialize();

// operands a & b, and operator 
let a = 0;
let b = 0;
let operator = "";
let displayValue = "";

