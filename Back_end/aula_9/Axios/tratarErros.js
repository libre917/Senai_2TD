const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/888")
  .then(response => {
    console.log("Dados recebidos: ", response.data);
  })
  .catch(error => {
    console.log("codigo de status:", error.message);
    console.log("codigo de status:", error.response.status);
    console.log("mensagem de status:", error.response.statusText);
  });
