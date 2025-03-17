const axios = require('axios');

axios.delete('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>{
    console.log('todo excluido')
})
.catch(error=>{
    console.error('Ocorreu erro:', error)
})