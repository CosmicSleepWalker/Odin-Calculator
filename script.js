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
    // checks to see if the event target is a button
    if(e.target.matches('button')){
        // retrieves the current bullet value
        let value = e.target.innerHTML;
        // checks to see if the number is a integer
        if(Number.isInteger(parseInt(value))){
            // if operator is empty
            if(operator === ""){
                // append it to first num
                firstNum = firstNum * 10 + parseInt(value);
                // update display
                document.querySelector("#user-input").value = firstNum;
            }else{
                // otherwise append it to second number
                secondNum = secondNum * 10 + parseInt(value);
                // update display
                document.querySelector("#user-input").value = secondNum;
            }
        // else if the value is an operator
        }else if(value === "+" || value === "-" || value === "/" || value === "*"){
            // second number is not empty
            if(operator && secondNum !== ""){
                // operate
                total = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
                // update display
                document.querySelector("#user-input").value = total;
                // reassign first num to total
                firstNum = total;
                // reassign secondnum to 0
                secondNum = 0;
            // otherwise firstnum is not empty
            }else if(firstNum !== ""){
                // assign operator to the current value
                operator  = value;
                // update the display with first number
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
