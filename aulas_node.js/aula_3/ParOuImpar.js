const readline = require("readline-sync");

const num = Number(readline.question("Digite um numero: "));

if (!isNaN(num)) {
  const result = num % 2 === 0 ? "par" : "impar";
  console.log(result);
} else {
  console.log(`não é um número`);
}
