const readline = require("readline-sync");

const peso = Number(readline.question("Digite seu peso: "));
const altura = Number(readline.question("Digite sua altura: "));

const IMC =
  !isNaN(peso) && !isNaN(altura)
    ? peso / altura ** 2
    : "Altura/Peso com valor inválido";

const Estado =
  IMC < 17
    ? "muito abaixo do peso"
    : IMC >= 17 && IMC < 18.5
    ? "abaixo do peso"
    : IMC >= 18.5 && IMC < 25
    ? "peso normal"
    : IMC >= 25 && IMC < 30
    ? "acima do peso"
    : IMC >= 30 && IMC < 35
    ? "obesidade 1"
    : IMC >= 35 && IMC < 40
    ? "obesidade 2 (severa)"
    : IMC >= 40
    ? "obesidade 3 (Mórbida)"
    : "Indefinido";

if (Estado == "Indefinido"){
    console.log(IMC)
} else{
console.log("IMC:", (IMC).toFixed(1), "\nSua condição é:", Estado);
}