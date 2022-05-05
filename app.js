const display = document.querySelector(".display");
const removeAll = document.querySelector('#removeAll');
const buttons = document.querySelector('.buttons');
const buttons2 = document.querySelector('.buttons2');
const power = document.querySelector('#power');
const equal = document.querySelector('#equal');
const calculator = document.querySelector('.calculator')

let result = '';
let displayOutput = ''; // used to display the result for the user in div.display
        // ex. "sin(" insted of javaScript method "Math.sin("

// an array with all special equations 
const specialButtons = [document.querySelector('#sin'), document.querySelector('#cos'),
                        document.querySelector('#ln'), document.querySelector('#log'),
                        document.querySelector('#tan'), document.querySelector('#sqrt'),
                        document.querySelector('#power'), document.querySelector('#E'),
                        document.querySelector('#pi')]
inputs = [];
calculator.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON' && e.target.value !== equal.value&& e.target !== remove && e.target !== removeAll && e.target !== power) {
        inputs.push(e.target)
        result += e.target.value;
        displayOutput += e.target.name;

        display.innerText = displayOutput;

    } else if (e.target.value === equal.value) { //target = equal => return result
        try {
            eval(result);
        } catch (e) {
            //in case user didn't close )
            result += ')'
            try {
                // try to return again
                eval(result);
            } catch {
                //  else result = '',  return undefined
                result = '';
            }
        } finally {
            //update display
            displayOutput = eval(result);
            display.innerText = displayOutput;

            if (!isNaN(eval(result))) {
                //save the result (this way we can use it)
                result = eval(result).toString();
                displayOutput = eval(result).toString()
            } else {
                //if result = '' => eval('') = undefined or eval(sin()) = NaN, this restarts results and displayOutput
                result = '';
                displayOutput = result;
            }
        }
    }else if (e.target === remove) {
        // deletes last input
        // if last input is in specialButtons delete it
        // ex : if last input = Math.sin( slice 'Math.sin(' from result
        // else if last input = 9 slice last index from result
        lastInput = inputs.pop()
        result = result.slice(0, -lastInput.value.length);
        displayOutput = displayOutput.slice(0, -lastInput.name.length);
        display.innerText = displayOutput;
    } else if (e.target === removeAll) {
        //(reset the result)
        result = '';
        displayOutput = result;
        display.innerText = result;
    } else if (e.target === power) {
        inputs.push(e.target)
        // Math.pow( + present result + ,
        // result = e.target.value + result + ',';
        result += e.target.value;
        displayOutput = displayOutput + ' ^';
        display.innerText = displayOutput;
    }
})

