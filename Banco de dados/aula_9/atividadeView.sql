create database amongUs;
use amongUs;

create table descricao (
cor text,
statusfuncao enum('inocente','impostor') default 'inocente',
nome varchar(20)
);

insert into descricao (cor, statusfuncao, nome) 
values 
('azul','inocente','azul'),
('vermelho','inocente','vermelho'),
('amarelo','inocente','amarelo'),
('ciano','impostor','ciano'),
('branco','inocente','branco');

create view detalhes as 
select nome, statusfuncao
from descricao where statusfuncao = 'inocente';

select * from detalhes;