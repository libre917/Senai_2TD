const readline = require("readline-sync");

const num = readline.question("digite um numero: ");
if (num <= 1) {
  console.log("numero invalido");
} else {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log("não primo, pois é divisivel por:", i);
      return false;
    }
  }
  if (true) {
    console.log(i, "primo");
  }
}

// Lista todos os divisores de numeros não primos

// const readline = require("readline-sync");

// const num = readline.question("digite um numero: ");
// let Primo = true
// if (num <= 1) {
//   console.log("numero invalido");
// } else {
//   for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//       console.log("não primo, pois é divisivel por:", i);
//       Primo = false
//     }

//   }
//   if (Primo) {
//     console.log(i,"primo");
//   } 

// }
