const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    if(num2 === 0){
        return "cannot divide by 0";
    }
    return num1 / num2;
};

const btn = document.querySelector("#inputs");
let firstNum = 0;
let secondNum = 0;
let operator = "";
btn.addEventListener("click", (e) => {
    if(e.target.matches('button')){
        let value = e.target.innerHTML;
        if(Number.isInteger(parseInt(value))){
            document.querySelector("#user-input").value += value;
        }else if(value === "+" || value === "-" || value === "/" || value === "*"){
            firstNum = parseFloat(document.querySelector("#user-input").value);
            console.log(firstNum);
            operator = value;
            document.querySelector("#user-input").value = "";
        }else if(value === "clear"){
            firstNum = 0;
            secondNum = 0;
            operator = "";
            document.querySelector("#user-input").value = "";
        }else if(value === "="){
            secondNum = parseFloat(document.querySelector("#user-input").value);
            const result = operate(firstNum, secondNum, operator);
            document.querySelector("#user-input").value = result;
        }
    }
});

const operate = (num1, num2, operator) => {
    switch(operator){
        case "/":
            console.log(num1 + " " + num2 + " " + operator);
            return divide(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        default:
            return "invalid operator";
    }
} 
