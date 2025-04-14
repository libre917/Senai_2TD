const db = require('./conexao');


db.query('SELECT *FROM Cliente', (err, results, fields)=>{
    if (err){
        console.error('Erro ao executar a consulta:', err);
        return;
    }
    console.log('Resultados da consulta:', results)
    console.log('Campos de consulta:', fields)
})

db.end((err)=>{
    if (err){
        console.error('Erro ao encerrar a conexão:', err)
        return;
    }
    console.log('Conexão encerrada com sucesso!!!')
})