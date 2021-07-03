
let currentSum = undefined;
var onScreen = []

const createButtons = () => {
    for (i = 0; i < 10; i++) {
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
        const button_container = document.getElementsByClassName('operation-input-keys');
        button_container[0].appendChild(number_button);
        number_button.className = 'operation-button';
        number_button.onclick = function() {appendDisplay(number_button)};
    }
    const eq_button = document.createElement('button');
    eq_button.textContent = '='
    let button_container = document.getElementsByClassName('operation-input-keys');
    button_container[0].appendChild(eq_button);
    eq_button.className = 'operation-button';
    eq_button.onclick = function() {evaluateDisplay()};

    const clr_button = document.createElement('button');
    clr_button.textContent = 'clr'
    button_container[0].appendChild(clr_button);
    clr_button.className = 'operation-button';
    clr_button.onclick = function() {clearDisplay()};
}

const appendDisplay = (button) => {
        const buttonValue = button.textContent
        const display = document.getElementsByClassName('display');
        const numberDisplay = document.createTextNode(`${buttonValue}`);
        onScreen.push(buttonValue);
        // alert(onScreen)
        display[0].appendChild(numberDisplay);
}

const evaluateDisplay = () => {
    plus = onScreen.includes('+')
    minus = onScreen.includes('-')
    divide = onScreen.includes('/')
    multiply = onScreen.includes('x')
    if ((plus + minus + divide + multiply) > 1){
        alert('More than one operation detected')
        return
    }
    if (onScreen.includes('+')){
        // alert('plus')
        opr_index = onScreen.indexOf('+')
        let val1 = 0
        let val2 = 0
        for (i = 0; i < opr_index; i++){
            val1 += onScreen[i]
        }
        for (i = opr_index+1; i < onScreen.length; i++){
            val2 += onScreen[i]
        }
        let calc_res = parseInt(val1) + parseInt(val2)
        const display = document.getElementsByClassName('display');
        display[0].textContent = `Answer: ${calc_res}`
    }
    else if (onScreen.includes('-')){
        // alert('minus')
        opr_index = onScreen.indexOf('-')
        let val1 = 0
        let val2 = 0
        for (i = 0; i < opr_index; i++){
            val1 += onScreen[i]
        }
        for (i = opr_index+1; i < onScreen.length; i++){
            val2 += onScreen[i]
        }
        let calc_res = parseInt(val1) - parseInt(val2)
        const display = document.getElementsByClassName('display');
        display[0].textContent = `Answer: ${calc_res}`
    }
    else if (onScreen.includes('x')){
        // alert('multiply')
        opr_index = onScreen.indexOf('x')
        let val1 = 0
        let val2 = 0
        for (i = 0; i < opr_index; i++){
            val1 += onScreen[i]
        }
        for (i = opr_index+1; i < onScreen.length; i++){
            val2 += onScreen[i]
        }
        let calc_res = parseInt(val1) * parseInt(val2)
        const display = document.getElementsByClassName('display');
        display[0].textContent = `Answer: ${calc_res}`
    }
    else if (onScreen.includes('/')){
        // alert('divide')
        opr_index = onScreen.indexOf('/')
        let val1 = 0
        let val2 = 0
        for (i = 0; i < opr_index; i++){
            val1 += onScreen[i]
        }
        for (i = opr_index+1; i < onScreen.length; i++){
            val2 += onScreen[i]
        }
        let calc_res = parseInt(val1) / parseInt(val2)
        const display = document.getElementsByClassName('display');
        display[0].textContent = `Answer: ${calc_res}`
    }
    

}

const clearDisplay = () => {
    onScreen = []
    const display = document.getElementsByClassName('display');
    display[0].textContent = ''
}