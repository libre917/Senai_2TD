const axios = require('axios');

axios.post("https://jsonplaceholder.typicode.com/todos", {
    userID: 1,
    title:'Comprar pão',
    completed: false
})
.then(response=>{
    console.log('Novo ToDO criado:', response.data)
})
.catch(error=>{
    console.log(error)
})