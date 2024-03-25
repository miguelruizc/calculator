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
    switch(event.target.className){
        case "clear":
            displayValue = "0";
            break;
        case "equal":
            console.log("equal clicked");
            break; 
        case "add":
            console.log("sum clicked");
            break;
        case "subtract":
            console.log("sub clicked");
            break; 
        case "multiply":
            console.log("mul clicked");
            break;
        case "divide":
            console.log("div clicked");
            break; 
        case "digit0":
            (displayValue == "0") ? (displayValue = "0") : (displayValue += "0");
            break;
        case "digit1":
            (displayValue == "0") ? (displayValue = "1") : (displayValue += "1");
            break; 
        case "digit2":
            (displayValue == "0") ? (displayValue = "2") : (displayValue += "2");
            break;
        case "digit3":
            (displayValue == "0") ? (displayValue = "3") : (displayValue += "3");
            break; 
        case "digit4":
            (displayValue == "0") ? (displayValue = "4") : (displayValue += "4");
            break;
        case "digit5":
            (displayValue == "0") ? (displayValue = "5") : (displayValue += "5");
            break;
        case "digit6":
            (displayValue == "0") ? (displayValue = "6") : (displayValue += "6");
            break;
        case "digit7":
            (displayValue == "0") ? (displayValue = "7") : (displayValue += "7");
            break; 
        case "digit8":
            (displayValue == "0") ? (displayValue = "8") : (displayValue += "8");
            break;
        case "digit9":
            (displayValue == "0") ? (displayValue = "9") : (displayValue += "9");
            break; 
    } 

    updateDisplay();
}

function initialize(){
    const container = document.querySelector(".calculator");
    const buttons = container.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });
}

function updateDisplay(){
    const screen = document.querySelector(".screen");
    screen.textContent = displayValue;
}

// variables for app
let a = 0;
let b = 0;
let operator = "";
let displayValue = "0";

// Initialize 
initialize();
updateDisplay();
