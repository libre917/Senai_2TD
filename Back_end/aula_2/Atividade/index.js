const os = require('os');
const fs = require('fs');



const info = (`plataforma: ${os.platform()}.\narquitetura: ${os.arch()}\ncpu: ${os.cpus()}\ntype: ${os.type()}\nversion: ${os.version()}`) 


fs.writeFile('info_sistema.txt', info, (err)=>{
    if (err) throw err;
    console.log('acho que foi')
})