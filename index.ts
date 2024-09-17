import { question } from "readline-sync";

function main(): void {
  const firstStr: string = question("Enter first number:\n ");
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question("Enter second number:\n");
  //Need to convert the strings into numbers for JavaScript, as otherwise a string '22' + '11' will be 2211. isNumber function created.

  const op = isOperator(operator);
  console.log(op);
}

function isOperator(operator: string): boolean {
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

function isNumber(str: string): boolean {
  //Returns a boolean as we want to know if the string is a number, true or false.
  const maybeNum = parseInt(str); //Parses a string argument and returns an integer(whole number).
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;

  //maybeNum = 456 (because "456" can be turned into the number 456)
  //isNaN(456) is false (because it's a valid number), so !false becomes true.
  //The code will return true.
}

main();
