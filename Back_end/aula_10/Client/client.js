import chalk from "chalk";
import axios from "axios";
import inquirer from "inquirer";

const API_URL = "http://localhost:3000";

async function listarProdutos() {
  try {
    const response = await axios.get(`${API_URL}/produtos`);
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed("Erro ao listar produtos: "),
      error.message
    );
  }
}

async function exibirDetalhesProduto(id) {
  try {
    const response = await axios.get(`${API_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed(`Erro ao exibir detalhes do produto com ID: ${id} `),
      error.message
    );
    return null;
  }
}

async function exibirMenu() {
  console.log('\n')
  const perguntas = [
    {
      type: "list",
      name: "opcao",
      message: chalk.yellow("Escolha uma opção: "),
      choices: [
        { name: chalk.green("Listar produtos"), value: "listar" },
        { name: chalk.green("Exibir detalhes do produto"), value: "exibir" },
        { name: chalk.red("Sair"), value: "sair" },
      ],
    },
  ];
  try {
    const resposta = await inquirer.prompt(perguntas);

    switch (resposta.opcao) {
      case "listar":
        const produtos = await listarProdutos();
        if (Array.isArray(produtos) && produtos.length > 0) {
          console.log(chalk.greenBright('Lista de produtos: '));
          produtos.forEach(produto => {
            console.log(`- ${chalk.blueBright(produto.id)}: ${chalk.green(produto.nome)} - R$ ${chalk.greenBright(produto.preco)}`)
          })
        } else {
          console.log(chalk.yellowBright("Nenhum produto encontrado."));
        }
        exibirMenu();
        break;
      case "exibir":
        const idResposta = await inquirer.prompt([
          {
            type: "input",
            name: "id",
            message: chalk.blue("Digite o ID do produto: "),
          },
        ]);
        const detalhe = await exibirDetalhesProduto(idResposta.id);
        if(detalhe) {
          console.log(chalk.greenBright('Detalhes do produto'))
          console.log(`- ${chalk.blueBright(detalhe.id)}: ${chalk.green(detalhe.nome)} - R$ ${chalk.greenBright(detalhe.preco)}`)
        }else{
          console.log('Nenhum produto encontrado')
        }
        exibirMenu();
        break;
      case "sair":
        console.log(chalk.yellow("Você escolheu sair"));
        break;
    }
  } catch (error) {
    console.error(chalk.black.bgRed("Ocorreu um erro inesperado "), error);
  }
}

exibirMenu();
