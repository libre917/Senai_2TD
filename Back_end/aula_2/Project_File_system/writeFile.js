const fs = require("fs");
// // Criar arquivo
// const conteudo = "este é o conteúdo do arquivo.";
// fs.writeFile("arquivo.txt", conteudo, (err) => {
//   if (err) throw err;
//   console.log("Arquivo Salvo!");
// });
const linha ='\nNovalinha';
fs.appendFile('arquivo.txt',linha,err =>{
    if (err) throw err;
    console.log('info nova')
})