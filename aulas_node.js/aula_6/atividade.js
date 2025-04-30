const readline = require("readline-sync");

function Pergunta() {
  registro = []
  const nome = readline.question("Digite seu nome: ");
  registro.push(nome);
  const tel = readline.question("Digite telefone: ");
  registro.push(tel);
  const estado = readline.question("Digite em que estado voce que vive: ");
  registro.push(estado);
  
  Registros.push(registro)
  
  const resposta = readline.question("Cadastrar mais usuarios? S/N\n");
  if (resposta == "s") {
    Pergunta();
  }
  if (resposta == "n") {
   Registros.forEach(element => {
    console.log('\nNome:',element[0]z,'\nTelefone:',element[1], '\nEstado:', element[2])
   });

  }
}

let registro = []
const Registros = []

Pergunta();
