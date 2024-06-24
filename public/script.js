// Script JS qui effectue tous les calculs de la calculatrice

let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput === '0' && number !== '0') currentInput = '';
    currentInput += number;
    updateDisplay();
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    const result = a / b;
    return Number(result.toFixed(16));
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};

function appendOperator(op) {
    if (currentInput === '') return;
    if (operator !== null) calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (operator === null || currentInput === '' || previousInput === '') return;
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.textContent = Math.round(currentInput * 100) / 100 || '0';
}