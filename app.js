const display = document.querySelector(".display");
const removeAll = document.querySelector('#removeAll');
const buttons = document.querySelector('.buttons');
const buttons2 = document.querySelector('.buttons2');
const power = document.querySelector('#power');
const equal = document.querySelector('#equal');

let result = '';
let displayOutput = ''; // used to display the result for the user in div.display
        // ex. "sin(" insted of javaScript method "Math.sin("

// an array with all special equations 
const specialButtons = [document.querySelector('#sin'), document.querySelector('#cos'),
                        document.querySelector('#ln'), document.querySelector('#log'),
                        document.querySelector('#tan'), document.querySelector('#sqrt'),
                        document.querySelector('#power'), document.querySelector('#E'),
                        document.querySelector('#pi')]


function removeSpecialButton() {
    //if last input is a special equation del the entier last input value from result
    specialButtons.forEach((x) => {
        if (result.endsWith(x.value)) {
            result = result.slice(0, -x.value.length)
            displayOutput = displayOutput.slice(0, -x.name.length);
            display.innerText = displayOutput;
        }
    })
}

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.value !== equal.value) {
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
                // save the result for further use
                result = eval(result).toString();
                displayOutput = eval(result).toString()
            } else {
                //if result = '' => eval('') = undefined or eval(sin()) = NaN, this restarts results and displayOutput
                result = '';
                displayOutput = result;
            }
        }

    }
})

buttons2.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' && e.target !== remove && e.target !== removeAll && e.target !== power) {
        result += e.target.value;
        displayOutput += e.target.name;
        display.innerText = displayOutput;
    } else if (e.target === remove) {
        // deletes last input
        if (specialButtons.some(x => result.endsWith(x.value))) {
            //if last input is a special equation del the entier last input value from result
            removeSpecialButton()
        } else {
            result = result.slice(0, -1);
            displayOutput = displayOutput.slice(0, -1);
            display.innerText = displayOutput;
        }
    } else if (e.target === removeAll) {
        //(reset the result)
        result = '';
        displayOutput = result;
        display.innerText = result;
    } else if (e.target === power) {
        // Math.pow( + present result + ,
        // result = e.target.value + result + ',';
        result += e.target.value;
        displayOutput = displayOutput + ' ^';
        display.innerText = displayOutput;
    }
})
