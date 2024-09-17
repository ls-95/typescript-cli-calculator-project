import { question } from "readline-sync";

function main(): void {
  const firstStr: string = question("Enter first number:\n ");
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question("Enter second number:\n");

  console.log(firstStr, operator, secondStr);
}

main();
