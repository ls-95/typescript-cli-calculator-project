"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n ");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    //Need to convert the strings into numbers for JavaScript, as otherwise a string '22' + '11' will be 2211. isNumber function created.
    var firstNum = isNumber(firstStr);
    console.log(firstNum);
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
