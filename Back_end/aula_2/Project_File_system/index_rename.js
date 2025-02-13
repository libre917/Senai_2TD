const fs = require('fs');

fs.rename('index_teste.js' , 'novo_index_teste.js' , (err)=>{
    if (err) throw err;
    console.log('arquivo renomeado!');
})