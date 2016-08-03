
function calculator(num1, operator, num2) {

let answer = 0;

if (operator === '+') {
    answer = num1 + num2;
} else if (operator === '-') {
    answer = num1 - num2;
} else if (operator === '*') {
    answer = num1 * num2;
} else if (operator === '/') {
    answer = num1 / num2;
} else if (operator === '^') {
    answer = Math.pow(num1, num2);
} else {
    console.log('failed');
}
return '' + answer;
}

module.exports = calculator;
