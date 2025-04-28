create database Exemplo_chaves;
use Exemplo_chaves;

create table clientes (
cliente_id int primary key,
nome varchar(100)
);

create table pedidos (
pedido_id int primary key,
cliente_id int,
valor decimal(10,2),
foreign key (cliente_id) references clientes(cliente_id) on delete cascade
);

insert into clientes (cliente_id, nome)
values 
(1,'a'),
(2,'b'),
(3,'c'),
(4,'d');

insert into pedidos (pedido_id, valor)
values
(1,13),
(2,14),
(3,15),
(4,16);

select *from pedidos;