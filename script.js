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
    return num1 / num2;
};

const btn = document.querySelector("#inputs");
btn.addEventListener("click", (e) => {
    if(e.target.matches('button')){
        let value = e.target.innerHTML;
        document.querySelector("#user-input").value += value;
    }
});

