const readline = require("readline-sync");

const idade = Number(readline.questionInt("Sua idade? "));
// if (!isNaN(idade)) {
//   if (idade >= 18) {
//     console.log("Maior de idade");
//   } else {
//     console.log("Menor de idade");
//   }
// } else {
//   console.log("Não é um numero");
// }
const result = (idade >= 18) ? 'Maior': 'Menor';
console.log(result)