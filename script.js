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
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
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
    display.textContent = currentInput || '0';
}
