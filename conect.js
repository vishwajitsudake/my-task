const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
});

equalsButton.addEventListener('click', () => {
    if (currentInput) {
        previousInput = display.value;
        calculate();
    }
});

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = '';
    operator = '';
}

// Add functionality to operators
document.querySelectorAll('.operator').forEach(opButton => {
    opButton.addEventListener('click', () => {
        if (currentInput) {
            operator = opButton.getAttribute('data-value');
            previousInput = currentInput;
            currentInput = '';
            display.value = previousInput + ' ' + operator + ' ';
        }
    });
});
