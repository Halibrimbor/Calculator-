let displayValue = "";

function appendToDisplay(value) {
    if (value === '.' && displayValue.includes('.')) return;
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById('result').value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        if (result === undefined) {
            document.getElementById('result').value = "Error";
        } else {
            document.getElementById('result').value = result;
            displayValue = result.toString();
        }
    } catch (error) {
        document.getElementById('result').value = "Error";
        displayValue = "";
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    }
});
