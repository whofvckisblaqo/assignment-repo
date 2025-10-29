// Select input fields and result display
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

// Select buttons
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

// Function to perform calculation
function calculate(operation) {
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    let res;

    switch (operation) {
        case 'add':
            res = number1 + number2;
            break;
        case 'subtract':
            res = number1 - number2;
            break;
        case 'multiply':
            res = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                result.textContent = 'Error: Cannot divide by zero';
                return;
            }
            res = number1 / number2;
            break;
    }
    result.textContent = `result: "${res}"`;
}
// Event listeners for buttons
addBtn.addEventListener('click', () => calculate('add'));
subtractBtn.addEventListener('click', () => calculate('subtract'));
multiplyBtn.addEventListener('click', () => calculate('multiply'));
divideBtn.addEventListener('click', () => calculate('divide'));