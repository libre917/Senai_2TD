const fs = require('fs');

fs.unlink('novo_index_teste.js', (err)=>{
    if (err) throw err;
    console.log('excluiu arquivo')
})