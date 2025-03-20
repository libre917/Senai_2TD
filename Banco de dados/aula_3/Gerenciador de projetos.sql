create database Gerenciador_de_Projetos;
use Gerenciador_de_Projetos;
drop database Gerenciador_de_Projetos;
select *from Projetos;
select *from colaborador;
select *from tarefas;


create table Projetos (
ID_projeto int auto_increment not null primary key,
nome_projeto text not null,
descricao varchar(100)
);
create table colaborador (
ID_colaborador int auto_increment not null Primary Key,
nome text not null,
email varchar(50) not null,
CPF varchar(11) not null
);

create table tarefas (
ID_tarefa int auto_increment not null Primary Key,
nome_tarefa text not null,
descricao_tarefa varchar(50)
);

insert into colaborador (nome,email,CPF)
values
('Lucas','lucas@gmail.com','12345678970'),
('Matue','matue@gmail.com','32165498723'),
('Nicolas','nicolas@gmail.com','78945612356');

insert into tarefas (nome_tarefa,descricao_tarefa)
values
('tarefa1','oi'),
('tarefa2',''),
('tarefa3','');

insert into Projetos (nome_projeto,descricao)
values 
('projeto1','tchua'),
('projeto2','lalala'),
('projeto3','io');

update colaborador
set nome = 'matheus'
where CPF = '32165498723';

update tarefas 
set descricao_tarefa = 'descrição nova';

update Projetos 
set descricao = 'descrição nova'
where nome_projeto = 'projeto3';

delete from tarefas;

delete from colaborador
where CPF = '78945612356'; 

delete from Projetos
where descricao = 'descrição nova';

select ID_colaborador, email from colaborador;

select *from colaborador;

