const os = require('os');
console.log(`Plataforma: ${os.platform()}`);//Ex: Plataforma: win32
console.log(`arquitetura:${os.arch()}`);//Ex: Arquitetura:x64
console.log(os.cpus())
console.log(os.homedir())
console.log(os.type())
console.log(os.version())
console.log(os.networkInterfaces())