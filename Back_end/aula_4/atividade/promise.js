const fs = require('fs').promises;

fs.mkdir('pastaNova_promise', {recursive:true})
.then(console.log('criou')
)
.catch(err=>{
    console.log('n deu bom')
})
