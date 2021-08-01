let screen = document.getElementById('screen');
let number = document.querySelectorAll('button');
// let op=document.querySelectorAll('#op');
let history = document.getElementById('history');
let clearmaindata = document.getElementById('maindata');
let alldata = document.getElementById('alldata');
let screenValue = '';
let historyValue = '';
let lastOperation = '';

for (item of number) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        

        if (buttonText === 'X') {
            buttonText = '*';
            let last=screenValue[screenValue.length-1];
            let operatorcheck=operatorChecker(last);
            let currentinput=operatorChecker(buttonText);
            if(operatorcheck && currentinput){
                return;
            }
            else{
                screenValue+=buttonText;
                if (buttonText != '=' && buttonText != 'CE') {
                    historyValue += buttonText;
                }
            }
            screen.value = screenValue;
        }
        else if (buttonText === 'CE') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText === 'C') {
            screenValue = '';
            screen.value = screenValue;
            historyValue = '';
            history.value = historyValue;
        }
        else if (buttonText === '=') {
            screen.value = eval(screenValue);
            let data = historyValue;
            history.value = data;
            historyValue = "";
        }
        else {
            let last=screenValue[screenValue.length-1];
            let operatorcheck=operatorChecker(last);
            let currentinput=operatorChecker(buttonText);
            if(operatorcheck && currentinput){
                return;
            }
            else{
                screenValue+=buttonText;
                if (buttonText != '=' && buttonText != 'CE') {
                    historyValue += buttonText;
                }
            }
            screen.value = screenValue;
        }
    })
}
function operatorChecker(op){
    if(op==='+' || op==='-' ||op==='/' || op==='*' ||op==='%'){
        return true;
    }
    else{
        false;
    }
}
//for Theme Toggle
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

