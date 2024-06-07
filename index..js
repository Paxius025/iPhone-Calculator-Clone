let display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input 
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
   try {
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}


function changeOperator() {
    const currentValue = display.value;
    if (currentValue) {
        if (currentValue.startsWith('-')) {
            display.value = currentValue.substring(1);
        } else {
            display.value = '-' + currentValue;
        }
    }
}

function percent() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue / 100;
    }
}
// function percent(){
    
// }
