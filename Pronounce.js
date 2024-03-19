const numIn = document.getElementById('numIn');
const pronunciation = document.getElementById('proOut');

const border = pronunciation.style.borderWidth;

function shrink() {
    pronunciation.animate(
        [
            { transform: "scaleY(1)", borderWidth: "2px", borderLeftWidth: "2px", borderRightWidth: "2px"},
            { transform: "scaleY(0)", borderWidth: "23px", borderLeftWidth: "2px", borderRightWidth: "2px"},
        ],
        {
            duration: 700,
            easing: "cubic-bezier(0.7, 0.3, 0.2, 1)"
        }
    )
}

function grow() {
    pronunciation.animate(
        [
            { transform: "scaleY(0)", borderWidth: "23px", borderLeftWidth: "2px", borderRightWidth: "2px"},
            { transform: "scaleY(1)", borderWidth: "2px", borderLeftWidth: "2px", borderRightWidth: "2px"},
        ],
        {
            duration: 600,
            easing: "cubic-bezier(0.7, 0.3, 0.2, 1)"
        }
    )
}

numIn.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') { 
        shrink();

        setTimeout(function() {
            pronunciation.textContent = ''; // clears the paragraph for next number

            let inputValue = document.getElementById('numIn').value.split('').reverse();
            // gets the input value, splits each place into and array, then reverses it so that the ones start first.
            // if the vlaue is 123 then the output would be ['3', '2', '1']

            let finalPron = ''; // final output variable

            if (inputValue.includes('-') === true) { // checks to see if there's a negative and adds negative to the beginning
                finalPron = 'negative ';
            }

            // hundreds placement
            if (inputValue.length >= 3) { // checks to see if the number is 3 or more digits
                switch(inputValue[2]) { // takes the hundreds place as input
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

            // teens
            if (inputValue.length >= 2) { // checks to see if the number is 2 or more digits
                switch(inputValue[1] + inputValue [0]) { // takes the tens and ones places combined to get the teens
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

                // tens placement
                switch(inputValue[1]) { // takes the tens place as input
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

            // ones placement
            if (inputValue.length >= 1 && inputValue[1] !== '1') { // checks to see if number is 1 or more digits and if the tens place is a one to properly output the teens
                switch(inputValue[0]) {
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

            if (inputValue.length === 1) { // isolates zero to only appear when its by itself since thats really the only time you see it
                switch(inputValue[0]) {
                    case '0':
                        finalPron += 'zero';
                        break;
                }
            }

            if (inputValue.includes('.') === true) {
                finalPron = '';
                finalPron = 'no';
            }

            pronunciation.textContent = finalPron; // assigns the final pronunciation to the paragraph

            grow();
        }, 600)
        
    }
});
