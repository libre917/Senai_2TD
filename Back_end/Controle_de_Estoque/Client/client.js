import chalk from "chalk";
import axios from "axios";
import inquirer from "inquirer";
import readline from 'readline-sync';
import fs from "fs";

const API_URL = "http://localhost:3000";

async function listarEstoques() {
  try {
    const response = await axios.get(`${API_URL}/estoques`);
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed("Erro ao listar estoques: "),
      error.message
    );
  }
}

async function exibirDetalhesEstoque(id) {
  try {
    const response = await axios.get(`${API_URL}/estoques/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed(`Erro ao exibir detalhes do estoque com ID: ${id} `),
      error.message
    );
    return null;
  }
}

async function adicionarEstoque() {
  try{
let Nome = readline.question('Qual o nome do estoque?\n')
let quantidade = Number(readline.question('Quantos produtos exite nesse estoque\n'))
if (isNaN(quantidade)){
  console.log("A quantidade digitada não é um numero")
  adicionarEstoque()
}
  }catch(error) {
    console.error(
    chalk.black.bgRed(`Erro ao adcionar estoque `),
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
        { name: chalk.green("Listar estoques"), value: "listar" },
        { name: chalk.green("Exibir detalhes do estoque"), value: "exibir" },
        { name: chalk.green("Adicionar um estoque"), value: "adicionar" },
        { name: chalk.green("Atualizar um estoque"), value: "atualizar" },
        { name: chalk.green("Remover um estoque"), value: "remover" },
        { name: chalk.red("Sair"), value: "sair" },
      ],
    },
  ];
  try {
    const resposta = await inquirer.prompt(perguntas);

    switch (resposta.opcao) {
      case "listar":
        const estoques = await listarEstoques();
        if (Array.isArray(estoques) && estoques.length > 0) {
          console.log(chalk.greenBright('Lista de estoques: '));
          estoques.forEach(estoque => {
            console.log(`- ${chalk.blueBright(estoque.id)}: ${chalk.green(estoque.nome)} - quant.: ${chalk.greenBright(estoque.quantidade)}`)
          })
        } else {
          console.log(chalk.yellowBright("Nenhum estoque encontrado."));
        }
        exibirMenu();
        break;
      case "exibir":
        const idResposta = await inquirer.prompt([
          {
            type: "input",
            name: "id",
            message: chalk.blue("Digite o ID do estoque: "),
          },
        ]);
        const detalhe = await exibirDetalhesEstoque(idResposta.id);
        if(detalhe) {
          console.log(chalk.greenBright('Detalhes do estoque'))
          console.log(`- ${chalk.blueBright(detalhe.id)}: ${chalk.green(detalhe.nome)} - quant.: ${chalk.greenBright(detalhe.quantidade)}`)
        }else{
          console.log('Nenhum estoque encontrado')
        }
        exibirMenu();
        break;
      case "adicionar":
        const adicionar = await adicionarEstoque();
        console.log(adicionar.Nome)
        
        
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
