const fs = require('fs');

fs.rmdir('pasta_teste', (err)=>{
    if (err) throw err;
    console.log('excluiu pasta')
})