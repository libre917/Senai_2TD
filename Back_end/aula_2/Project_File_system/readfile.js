const fs = require("fs");
// Lê arquivo
fs.readFile('arquivo.txt','utf8', (err, data) => {
if (err) throw err;
console.log(data);
})