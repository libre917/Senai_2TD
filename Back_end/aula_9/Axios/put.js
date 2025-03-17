const axios = require('axios');

axios.put("https://jsonplaceholder.typicode.com/todos/1", {
    userID: 1,
    title:'Comprar pão de forma',
    completed: true
})
.then(response=>{
    console.log('ToDO atualizado:', response.data)
})
.catch(error=>{
    console.log(error)
})