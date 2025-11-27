const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');

function appendToDisplay(input) {
    // แก้ไข: เช็คแค่ Error อย่างเดียว (ลบ GAME OVER ออกแล้ว)
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
    // แก้ไข: เช็คแค่ Error อย่างเดียว
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
        // แก้ไข: เปลี่ยนจาก "GAME OVER" เป็น "Error" ตรงนี้ครับ
        display.value = "Error";
        historyDisplay.innerText = "";
    }
}
