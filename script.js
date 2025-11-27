const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');

function appendToDisplay(input) {
    if(display.value === "Error") {
        display.value = "";
        historyDisplay.innerText = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    historyDisplay.innerText = "";
}

function deleteLastChar() {
    if(display.value === "Error") {
        display.value = "";
        historyDisplay.innerText = "";
    } else {
        display.value = display.value.toString().slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.value;
        if(expression === "") return;

        let result = eval(expression);

        if (!isFinite(result) || isNaN(result)) {
            throw new Error("Division by Zero");
        }

        historyDisplay.innerText = expression + " ="; 
        display.value = result;

    } catch (error) {
        display.value = "Error";
        historyDisplay.innerText = "";
    }
}
