const fs = require('fs')

fs.mkdir('pasta_teste', err =>{
    if (err) throw err;
    console.log('criou uma pasta')
} )

