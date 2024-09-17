import { question } from "readline-sync";
/*
As we know that the operator is limited to 4 different ''operators', instead of setting it as a 'string', we can create a type to specify more clearly the valid inputs:
*/

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number:\n ");
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question("Enter second number:\n");
  //Need to convert the strings into numbers for JavaScript, as otherwise a string '22' + '11' will be 2211. isNumber function created.

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  // console.log(validInput); CHECK IS IT WORKS

  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum); // as Operator as we know it will be one of the 4 operators indicated in the type.
    console.log(result);
  } else {
    console.log("\ninvalid input\n");
    main();
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
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
