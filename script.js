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
let total = 0;
btn.addEventListener("click", (e) => {
    if(e.target.matches('button')){
        let value = e.target.innerHTML;
        if(Number.isInteger(parseInt(value))){
            if(operator === ""){
                firstNum = firstNum * 10 + parseInt(value);
                document.querySelector("#user-input").value = firstNum;
            }else{
                secondNum = secondNum * 10 + parseInt(value);
                document.querySelector("#user-input").value = secondNum;
            }
        }else if(value === "+" || value === "-" || value === "/" || value === "*"){
            if(operator && secondNum !== ""){
                total = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
                document.querySelector("#user-input").value = total;
                firstNum = total;
                secondNum = 0;
            }else if(firstNum !== ""){
                operator  = value;
                document.querySelector("#user-input").value = firstNum;
            }
        }else if(value === "clear"){
            firstNum = 0;
            secondNum = 0;
            operator = "";
            total = 0;
            document.querySelector("#user-input").value = "";
        }else if(value === "="){
            if(operator && secondNum !== "") {
                total = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
                document.querySelector("#user-input").value = total;
                firstNum = total;
                secondNum = 0; 
                operator = ""
            }else if(total !== ""){
                document.querySelector("#user-input").value = total;
            }
        }
    }
});

const operate = (num1, num2, operator) => {
    switch(operator){
        case "/":
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
