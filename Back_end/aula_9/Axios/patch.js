const axios = require('axios');

axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
    title: "comprar pinto bean"
})
.then(response=>{
    console.log('ToDO atualizado:', response.data)
})
.catch(error=>{
    console.log(error)
})