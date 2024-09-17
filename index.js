"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n ");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    //Need to convert the strings into numbers for JavaScript, as otherwise a string '22' + '11' will be 2211. isNumber function created.
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput); CHECK IS IT WORKS
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum); // as Operator as we know it will be one of the 4 operators indicated in the type.
        console.log(result);
    }
    else {
        console.log("\ninvalid input\n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    //A swtich statement normally needs a default value but not in this case there are ONLY 4 values that are specified with Operator.
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    //Is this or is this not an operator.
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
    //Same as if you wrote return operator === '+' || '-' || '*' || '/';
}
function isNumber(str) {
    //Returns a boolean as we want to know if the string is a number, true or false.
    var maybeNum = parseInt(str); //Parses a string argument and returns an integer(whole number).
    var isNum = !isNaN(maybeNum);
    return isNum;
    //maybeNum = 456 (because "456" can be turned into the number 456)
    //isNaN(456) is false (because it's a valid number), so !false becomes true.
    //The code will return true.
}
main();
