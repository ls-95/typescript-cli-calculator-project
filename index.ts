import { question } from "readline-sync";

function main(): void {
  const firstStr: string = question("Enter first number:\n ");
  console.log(firstStr);
}

main();
