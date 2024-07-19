// 2. Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function quesTwo(exp) {
    let result = 0;
    let currentNumber = 0;
    let currentOperator = '+';
    
    for (let i = 0; i < exp.length; i++) {
        let char = exp[i];
        
        if (char >= '0' && char <= '9') {
            currentNumber = currentNumber * 10 + parseInt(char);
        }
        
        if (char === '+' || char === '-' || i === exp.length - 1) {
            if (currentOperator === '+') {
                result += currentNumber;
            } else if (currentOperator === '-') {
                result -= currentNumber;
            }
            currentOperator = char;
            currentNumber = 0;
        }
    }
    
    return result;
}
console.log(quesTwo("10+5-3+2"));