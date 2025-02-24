const fs = require('fs');

const dados = {
    nome: 'Lucas' ,
    idade: 18,
    cidade: "São Paulo",
};
const jsonData = JSON.stringify(dados, null, 2);
fs.writeFile('dados.json', jsonData, 'utf8', (err)=>{
if (err){
    console.log("deu erro seu macaco", err);
    return;
}
console.log('Dados salvos no arquivo!')
})