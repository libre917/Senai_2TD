const readline = require("readline-sync");
let tentativas = 0;
function autenticacao() {
  if (tentativas == 3) {
    console.log("Suas tentativas chegaram ao limite, tente mais tarde");
  } else {
    const Senha = "Senai123";
    const Login = "ADMIN";

    const LoginDigitado = readline.question("Digite seu login: ");
    const SenhaDigitada = readline.question("Digite a senha: ");

    if (Senha == SenhaDigitada && Login == LoginDigitado) {
      console.log("Boas-vindas administrador!");
    } else {
      console.log("Senha ou(e) Login incorreto(s)");
      tentativas++;
      autenticacao();
    }
  }
}
autenticacao();
