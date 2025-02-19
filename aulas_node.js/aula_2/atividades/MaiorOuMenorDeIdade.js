const readline = require("readline-sync");

const idadePermitida = 18;

let idade = Number(readline.question("Qual a sua idade?: "));
// if (idade > 120 || idade < 1) {
//   console.log("idade invalida");
// } else {
//   if (idade < idadePermitida) {
//     console.log("Sem permissão");
//   } else {
//     console.log("Idade permitida");
//   }
// }

if (idade <= 120 && idade >= 1) {
  if (idade < idadePermitida) {
    console.log("Sem permissão");
  } else {
    console.log("Idade permitida");
  }
} else {
  console.log("idade invalida");
}
