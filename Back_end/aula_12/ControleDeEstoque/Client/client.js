import chalk from "chalk";
import axios from "axios";
import inquirer from "inquirer";


const API_URL = "http://localhost:3000";

async function listarEstoques() {
  try {
    const response = await axios.get(`${API_URL}/estoques`);
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed("Erro ao listar estoque: "),
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
      chalk.black.bgRed(`Erro ao exibir detalhes do ID: ${id} `),
      error.message
    );
    return null;
  }
}

async function adicionarEstoque() {
  try {
    const Perguntas = [
      {
        type: "password",
        name: "Senha",
        message:  chalk.yellow("[Acesso restrito] Qual a senha?\n "),
        mask: "*" 
      },
      {
        type: "input",
        name: "nome",
        message: "Qual o nome do produto?\n ",
      },
      {
        type: "input",
        name: "quantidade",
        message: "Qual a quantidade?\n ",
      },
    ];  
        const DadosJSON = await axios.get(`${API_URL}/estoques`);
    
        const IdAnterior = DadosJSON.data[DadosJSON.data.length - 1];
        const ID = IdAnterior ? parseInt(IdAnterior.id) + 1 : 1; 
    
    const Respostas = await inquirer.prompt(Perguntas);
    const response = await axios.post(
      `${API_URL}/estoques`,
      { id: ID, nome: Respostas.nome, quantidade: Respostas.quantidade },
      { headers: { Authorization: `${Respostas.Senha}` } }
    );
    console.log(
      chalk.blueBright("\n Produto adicionado ao estoque")
    );
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed(`Erro ao adicionar produto `),
      error.message
    );
    return null;
  }
}

async function atualizarEstoque() {
  try {
    const Perguntas = [
      {
        type: "password",
        name: "Senha",
        message:  chalk.yellow("[Acesso restrito] Qual a senha?\n "),
        mask: "*" 
      },
      {
        type: "input",
        name: "Id",
        message: "ID do produto que deseja alterar?\n ",
      },
      {
        type: "input",
        name: "nome",
        message: "Qual o nome?\n ",
      },
      {
        type: "input",
        name: "quantidade",
        message: "Qual a quantidade?\n ",
      },
    ];
    const Respostas = await inquirer.prompt(Perguntas);
    const response = await axios.put(`${API_URL}/estoques/${Respostas.Id}`, {
      id: Respostas.Id,
      nome: `${Respostas.nome}`,
      quantidade: Respostas.quantidade,
    }, { headers: { Authorization: `${Respostas.Senha}` } });
    console.log(
      chalk.blueBright("\n Info atualizada com sucesso")
    );
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed(`Erro ao atualizar `),
      error.message
    );
    return null;
  }
}
async function deletarEstoque() {
  try {
    const Perguntas = [
      {
        type: "password",
        name: "Senha",
        message: chalk.yellow("[Acesso restrito] Qual a senha?\n "),
        mask: "*" 
      },
      {
        type: "input",
        name: "Id",
        message: "Qual produto que deseja remover? (Digite a ID)\n ",
      },
    ];
    const Respostas = await inquirer.prompt(Perguntas);
    const response = await axios.delete(`${API_URL}/estoques/${Respostas.Id}`,{ headers: { Authorization: `${Respostas.Senha}` } });
    console.log(
      chalk.blueBright("\n Produto removido")
    );
    return response.data;
  } catch (error) {
    console.error(
      chalk.black.bgRed(`Erro ao remover `),
      error.message
    );
    return null;
  }
}

async function exibirMenu() {
  console.log("\n");
  const perguntas = [
    {
      type: "list",
      name: "opcao",
      message: chalk.yellow("Escolha uma opção: "),
      choices: [
        { name: chalk.greenBright("[--Listar estoques--]"), value: "listar" },
        { name: chalk.greenBright("[--Exibir detalhes do estoque--]"), value: "exibir" },
        { name: chalk.greenBright("[--Adicionar um estoque--]"), value: "adicionar" },
        { name: chalk.greenBright("[--Atualizar um estoque--]"), value: "atualizar" },
        { name: chalk.greenBright("[--Remover um estoque--]"), value: "remover" },
        { name: chalk.redBright("[--Sair--]"), value: "sair" },
      ],
    },
  ];
  try {
    const resposta = await inquirer.prompt(perguntas);

    switch (resposta.opcao) {
      case "listar":
        const estoques = await listarEstoques();
        if (Array.isArray(estoques) && estoques.length > 0) {
          console.log(chalk.greenBright("Estoque:\n "));
          estoques.forEach((estoque) => {
            console.log(
              `- ${chalk.blueBright(`[${estoque.id}]`)} -- ${chalk.cyan(
                estoque.nome
              )} -- Quantidade: ${chalk.cyan(estoque.quantidade)}`
            );
          });
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
            message: chalk.blue("Digite o ID: "),
          },
        ]);
        const detalhe = await exibirDetalhesEstoque(idResposta.id);
        if (detalhe) {
          console.log(chalk.greenBright("Detalhes:\n "));
          console.log(
            `- ${chalk.blueBright(`[${detalhe.id}]`)} -- ${chalk.cyan(
              detalhe.nome
            )} -- Quantidade: ${chalk.cyan(detalhe.quantidade)}`
          );
        ;
        } else {
          console.log("Nenhum estoque encontrado");
        }
        exibirMenu();
        break;
      case "adicionar":
        const adicionar = await adicionarEstoque();

        exibirMenu();
        break;
      case "atualizar":
        const atualizar = await atualizarEstoque();
   
        exibirMenu();
        break;
      case "remover":
        const Deletar = await deletarEstoque()

        exibirMenu();
        break;
      case "sair":
        console.log(chalk.yellow("\n--Você escolheu sair--"));
        break;
    }
  } catch (error) {
    console.error(chalk.black.bgRed("Ocorreu um erro inesperado "), error);
  }
}

exibirMenu();
