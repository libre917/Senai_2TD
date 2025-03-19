const readline = require("readline-sync");

const CLS = "\x1Bc";

const BLACK = "\u001b[30m";
const VERMELHO = "\u001b[31m";
const VERDE = "\u001b[32m";
const AMARELO = "\u001b[33m";
const AZUL = "\u001b[34m";
const MAGENTA = "\u001b[35m";
const CIANO = "\u001b[36m";

const FVERMELHO = "\u001b[41m";
const FVERDE = "\u001b[42m";
const FAMARELO = "\u001b[43m";
const FAZUL = "\u001b[44m";
const FMAGENTA = "\u001b[45m";
const FCIANO = "\u001b[46m";
const FBRANCO = "\u001b[47m";

const NORMAL = "\u001b[m";
const NEGRITO = "\u001b[1m";
const SUBLINHADO = "\u001b[4m";

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const ano = date.getFullYear();
const hora = date.getHours();
const minuto = date.getMinutes();

const DataHora = `${dia}/${mes}/${ano} || ${hora}:${minuto}`;

console.log(
  "\n" + FCIANO + NEGRITO + SUBLINHADO + "Faça sua escolha " + NORMAL + "\n"
);
console.log("[1] Data e hora com texto verde");
console.log("[2] Data e hora com texto azul");
console.log("[3] Data e hora com texto vermelho");
console.log("[4] Data e hora com fundo verde");
console.log("[5] Data e hora com fundo azul");
console.log("[6] Data e hora com fundo vermelho");
console.log("[7] Sair\n");

const valorDigitado = Number(readline.question("digite um numero: "));

switch ((DataHora, valorDigitado)) {
  case 1:
    console.log(VERDE + DataHora + NORMAL + "\n");
    break;
  case 2:
    console.log(AZUL + DataHora + NORMAL + "\n");
    break;
  case 3:
    console.log(VERMELHO + DataHora + NORMAL + "\n");
    break;
  case 4:
    console.log(FVERDE + DataHora + NORMAL + "\n");
    break;
  case 5:
    console.log(FAZUL + DataHora + NORMAL + "\n");
    break;
  case 6:
    console.log(FVERMELHO + DataHora + NORMAL + "\n");
    break;
  case 7:
    console.log(AMARELO + "Você escolheu sair" + NORMAL + "\n");
    break;
  default:
    console.log(FAMARELO + NEGRITO + 'Opção inválida' + NORMAL )
    break;
}
