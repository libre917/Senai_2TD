create database gerenciador_de_tarefas;
use gerenciador_de_tarefas;

create table colaborador(
id_colaborador INT auto_increment primary key,
nome varchar(50),
email varchar(100),
telefone INT
);

create table projetos(
colaborador_id_colaborador int,
id_projeto INT auto_increment,
nome_projeto varchar(50),
descricao varchar(100),
tarefas_id_tarefas INT
);

create table tarefas(
id_tarefa INT auto_increment primary key,
nome_tarefa varchar(50)
);