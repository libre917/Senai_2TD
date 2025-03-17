import chalk from "chalk";
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(chalk.green("Dados recebidos com sucesso!!!"));
    console.log(response.data);
  })
  .catch((error) => {
    console.log(chalk.pin("Ocorreu um erro:"));
    console.log(error.message);
  });
