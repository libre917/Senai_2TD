const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja_2'
});

connection.connect((err)=>{
    if (err) {
        console.error('Erro ao conectar com o banco de dados:', err)
        return;
    }   
    console.log('Conexão estabelecida com sucesso')
})
module.exports = connection