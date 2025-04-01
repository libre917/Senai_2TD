create database Loja_de_Musica;
use Loja_de_Musica;

create table Estoque (
ID_Estoque int Primary Key,
Quantidade int not null
);
create table Funcionarios (
ID_Funcionarios int Primary Key,
CPF varchar(11) not null,
Endereco text,
nome text not null
);

insert into Estoque (Quantidade)
values