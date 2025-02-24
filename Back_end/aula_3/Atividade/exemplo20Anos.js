import fs from "node:fs";
import readline from "node:readline";

//User.json path
const user_json_path = "./user.json"

// Define a user_data com os dados atuais do user.json 
const user_data = JSON.parse(fs.readFileSync(user_json_path, "utf8"));

// Define a constante para input de dados
const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question(`
Escolha uma das opções abaixo:
1 - Visualizar dados;
2 - Alterar dados
Opção: `, (option) => {
	switch(option) {
		//Opção que apenas mostra os dados atuais registrados no user.json
		case "1":
			console.log("\n-------- DADOS ATUAIS -------");
			console.log(JSON.stringify(user_data,null,2),"\n");
			input.close();
			break;

		// Pergunta ao usuário qual dado ele gostaria de alterar
		case "2":
			input.question('\nEscolha uma das opções abaixo:\n1 - Nome\n2 - Idade\n3 - Email\nOpção: ', (option) => {
				switch(option) {

					// Permite o usuário a alterar o username presente no user.json
					case "1":
						input.question("Defina um novo nome: ", (new_username) => {
							user_data.username = new_username;
							fs.writeFile(user_json_path, JSON.stringify(user_data,null,2), (err) => {
								if(err){
									console.log("Erro ao salvar o arquivo: ", err);
									return
								};

								console.log("\n-------- DADOS ATUAIS -------");
								console.log(JSON.stringify(user_data,null,2))
								console.log("\nNome atualizado com sucesso!");
								input.close();
							});
						});
						break;

					// Permite o usuário a alterar a idade presente no user.json
					case "2":
						input.question("Defina uma nova idade: ", (new_age) => {
							new_age = parseInt(new_age);

							if(new_age <= 0) {
								console.log("Idade inválida, tente novamente.");
								input.close();
								return
							}
							
							user_data.age = new_age;
							fs.writeFile(user_json_path, JSON.stringify(user_data,null,2), (err) => {
								if(err){
									console.log("Erro ao salvar o arquivo: ", err);
									input.close();
									return
								};

								console.log("\n-------- DADOS ATUAIS -------");
								console.log(JSON.stringify(user_data,null,2))
								console.log("\nIdade atualizada com sucesso!")
								input.close();
							});
						});
						break;

					// Permite o usuário a alterar o e-mail presente no user.json
					case "3":
						input.question("Defina um novo e-mail: ", (new_email) => {
							user_data.email = new_email;
							fs.writeFile(user_json_path, JSON.stringify(user_data,null,2), (err) => {
								if(err){
									console.log("Erro ao salvar o arquivo: ", err);
									return
								};

								console.log("\n-------- DADOS ATUAIS -------");
								console.log(JSON.stringify(user_data,null,2))
								console.log("\nE-mail atualizado com sucesso!")
								input.close();
							});
						});
						break;
					
					// Informa ao usuário que a opção escolhida é inválida
					default:
						console.log("Opção inválida, tente novamente.");
						input.close();
						break;
				};
			});
	};
});
