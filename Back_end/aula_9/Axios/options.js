const axios = require('axios');

axios.request({
    method: 'options',
    url: 'https://jsonplaceholder.typicode.com/todos/'
})
.then(response=>{
    console.log('Metodos permitidos:', response.headers.allow)
    console.log('Cabeçalhos:', response.headers)
})
.catch(error=>{
    console.log(error)
})