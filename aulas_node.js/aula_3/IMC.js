const readline = require("readline-sync");

const altura = Number(readline.question("Sua altura: "));
let peso = Number(readline.question("Seu peso: "));
if (!isNaN(altura) && !isNaN(peso)) {
  const IMC = peso / altura ** 2;

  if (IMC < 17) {
    console.log("muito abaixo do peso", parseFloat(IMC).toFixed(1));
  } else {
    if (IMC >= 17 && IMC <= 18.49) {
      console.log("abaixo do peso", parseFloat(IMC).toFixed(1));
    } else {
      if (IMC >= 18.5 && IMC <= 24.99) {
        console.log("peso normal", parseFloat(IMC).toFixed(1));
      } else {
        if (IMC >= 25 && IMC <= 29.99) {
          console.log("acima do peso", parseFloat(IMC).toFixed(1));
        } else {
          if (IMC >= 30 && IMC <= 34.99) {
            console.log("obesidade 1", parseFloat(IMC).toFixed(1));
          } else {
            if (IMC >= 35 && IMC <= 39.99) {
              console.log("obesidade 2 (severa)", parseFloat(IMC).toFixed(1));
            } else {
              if (IMC > 40) {
                console.log(
                  "obesidade 3 (Mórbida)",
                  parseFloat(IMC).toFixed(1)
                );
              }
            }
          }
        }
      }
    }
  }
} else if (isNaN(altura) && isNaN(peso)) {
  console.log("nenhum dos valores é numérico");
} else if (isNaN(peso)) {
  console.log("o valor do peso não é numérico");
} else if (isNaN(altura)) {
  console.log("o valor da altura não é numérico");
}
