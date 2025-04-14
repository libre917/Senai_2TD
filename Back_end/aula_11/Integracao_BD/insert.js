const db = require('./conexao');

const novoCliente = {
    nome:'rogerio',
    email:'oi@gmail.com',
    endereco:'rua saopaulo'
}


db.query('INSERT INTO cliente SET ? ', novoCliente, (err, results)=>{
   
})

db.end((err)=>{
    if (err){
        console.error('Erro ao encerrar a conexão:', err)
        return;
    }
    console.log('Conexão encerrada com sucesso!!!')
})