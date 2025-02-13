const { log } = require("console");
const fs = require("fs");
// Criar arquivo
const conteudo = "este é o conteúdo do arquivo. conteudo novo";
try{
fs.writeFileSync("arquivo.txt", conteudo,);
console.log('foi')
} catch(err){
    console.log('não foi')
}
