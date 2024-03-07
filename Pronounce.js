const numIn = document.getElementById('numIn');
const pronunciation = document.getElementById('proOut');

numIn.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        pronunciation.textContent = '';
        let inputValue = document.getElementById('numIn').value.split('').reverse();
        console.log(inputValue);
        let finalPron = '';
        if (inputValue.includes('-') === true) {
            finalPron = 'negative ';
        }
        if (inputValue.length >= 3) {
            switch(inputValue[2]) {
                case '1':
                    finalPron += 'one hundred ';
                    break;
                case '2':
                     finalPron += 'two hundred ';
                     break;
                 case '3':
                     finalPron += 'three hundred ';
                     break;
                 case '4':
                     finalPron += 'four hundred ';
                     break;
                 case '5':
                     finalPron += 'five hundred ';
                     break;
                 case '6':
                     finalPron += 'six hundred ';
                     break;
                 case '7':
                     finalPron += 'seven hundred ';
                     break;
                 case '8':
                     finalPron += 'eight hundred ';
                     break;
                 case '9':
                     finalPron += 'nine hundred ';
                     break;
            }
        }
        if (inputValue.length >= 2) {
            switch(inputValue[1] + inputValue [0]) {
                case '10':
                    finalPron += 'ten';
                    break;
                case '11':
                    finalPron += 'eleven';
                    break;
                case '12':
                     finalPron += 'twelve';
                     break;
                 case '13':
                     finalPron += 'thirteen';
                     break;
                 case '14':
                     finalPron += 'fourteen';
                     break;
                 case '15':
                     finalPron += 'fifteen';
                     break;
                 case '16':
                     finalPron += 'sixteen';
                     break;
                 case '17':
                     finalPron += 'seventeen';
                     break;
                 case '18':
                     finalPron += 'eighteen';
                     break;
                 case '19':
                     finalPron += 'nineteen';
                     break;
            }
            switch(inputValue[1]) {
                case '2':
                     finalPron += 'twenty ';
                     break;
                 case '3':
                     finalPron += 'thirty ';
                     break;
                 case '4':
                     finalPron += 'forty ';
                     break;
                 case '5':
                     finalPron += 'fifty ';
                     break;
                 case '6':
                     finalPron += 'sixty ';
                     break;
                 case '7':
                     finalPron += 'seventy ';
                     break;
                 case '8':
                     finalPron += 'eighty ';
                     break;
                 case '9':
                     finalPron += 'ninety ';
                     break;
            }
        }
        if (inputValue.length >= 1 && inputValue[1] !== '1') {
            switch(inputValue[0]) {
                case '0':
                    finalPron += 'zero';
                    break;
                case '1':
                    finalPron += 'one';
                    break;
                case '2':
                     finalPron += 'two';
                     break;
                 case '3':
                     finalPron += 'three';
                     break;
                 case '4':
                     finalPron += 'four';
                     break;
                 case '5':
                     finalPron += 'five';
                     break;
                 case '6':
                     finalPron += 'six';
                     break;
                 case '7':
                     finalPron += 'seven';
                     break;
                 case '8':
                     finalPron += 'eight';
                     break;
                 case '9':
                     finalPron += 'nine';
                     break;
            }
        }

        if (inputValue.length >= 4) {
            finalpron += '';

            finalPron += 'nope!';
        }

        pronunciation.textContent = finalPron;
    }
});
