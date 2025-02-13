const fs = require('fs')

fs.writeFile("index_teste.js", "" ,(err) =>{
    if (err) throw err;
    console.log('criou arquivo')
});