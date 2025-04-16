const readline = require("readline-sync");

const num = readline.question("Digite a quantidade de números primos que deseja ver: ");

if (num <= 0) {
  console.log("Número inválido.");
} else {
  let i = 0;
  let numero = 2;

  while (i < num) {
    let ehPrimo = true;

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }

    if (ehPrimo) {
      console.log(numero);
      i++;
    }

    numero++;
  }
}
