let currentResult = "0";
let currentOperator = null;
let pendingValue = null;

function appendToResult(value) {
    if (currentResult === "0" || currentResult === null) {
        currentResult = value;
    } else {
        currentResult += value;
    }
    updateResult();
}

function updateResult() {
    document.getElementById("result").textContent = currentResult;
}

function clearResult() {
    currentResult = "0";
    currentOperator = null;
    pendingValue = null;
    updateResult();
}

function operate(operator) {
    if (currentOperator !== null) {
        calculateResult();
    }
    currentOperator = operator;
    pendingValue = currentResult;
    currentResult = null;
}

function calculateResult() {
    if (pendingValue === null || currentOperator === null || currentResult === null) {
        return;
    }
    switch (currentOperator) {
        case '+':
            currentResult = String(Number(pendingValue) + Number(currentResult));
            break;
        case '-':
            currentResult = String(Number(pendingValue) - Number(currentResult));
            break;
        case '*':
            currentResult = String(Number(pendingValue) * Number(currentResult));
            break;
        case '/':
            currentResult = String(Number(pendingValue) / Number(currentResult));
            break;
    }
    pendingValue = null;
    currentOperator = null;
    updateResult();
}