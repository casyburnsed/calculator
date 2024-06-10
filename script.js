const display = document.getElementById('display');

function number(num) {
    display.value +=num;
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/x/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        display.value = 'Error';
    }
}


function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}