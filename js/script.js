
let currentSum = undefined;

const createButtons = () => {
    for (i = 1; i < 10; i++) {
        const number_button = document.createElement('button');
        number_button.textContent = i;
        const button_container = document.getElementsByClassName('number-input-keys');
        button_container[0].appendChild(number_button);
        number_button.className = 'number-button';
        number_button.onclick = function() {appendDisplay(number_button)};
    }
    var operation_array = ['+','-','x','/']
    for (i = 0; i < 4; i++){
        const number_button = document.createElement('button');
        number_button.textContent = operation_array[i];
        const button_container = document.getElementsByClassName('number-input-keys');
        button_container[0].appendChild(number_button);
        number_button.className = 'number-button';
        number_button.onclick = function() {appendDisplay(number_button)};
    }
}

const appendDisplay = (button) => {
        const buttonValue = button.textContent
        const display = document.getElementsByClassName('display');
        const numberDisplay = document.createTextNode(`${buttonValue}`)
        display[0].appendChild(numberDisplay)
}