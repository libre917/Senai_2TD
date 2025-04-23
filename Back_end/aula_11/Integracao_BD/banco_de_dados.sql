Create database loja_2;
use loja_2;

create table cliente (
id Int auto_increment primary key,
nome varchar(50),
email varchar(50),
endereco varchar(50)
);

create table produtos(
id Int auto_increment primary key,
nome varchar(50),
descricao text,
preco decimal
);

drop table pedidos;

create table Pedidos(
id Int auto_increment primary key,
cliente_id int,
Data timestamp,
total decimal
);
create table itens_Pedido(
pedido_id int,
produto_id int,
quantidade int,
preco_unitario decimal
);

insert into cliente (nome, email, endereco)
value
('Otavio','otavio@gmail.com','Rua do Otavio'),
('Maria','maria@gmail.com','Av. Maria do Carmo'),
('Larissa','lari@gmail.com','Rua Larissa Manoela'),
('Rodrigo','Rodrigo@hotmail.com','Rua Rodri'),
('Lucas','lucas@gmail.com','Rua Biagio Marini');

insert into produtos (nome, descricao, preco)
value 
('Pulseira','Fica no pulso',19.99),
('Relógio','Fica no pulso, e mostra o horário', 47999.99),
('Monitor','Mostra video 4k', 4000.00),
('Teclado','Tamanho médio', 300.00),
('Mouse','Preto',35.00);

insert into pedidos (cliente_id,  total)
value
(1,'319.99'),
(2,'4000.00'),
(3,'70.00'),
(4,'70.00'),
(5,'35.00');

insert into itens_Pedido( pedido_id, produto_id, quantidade, preco_unitario)
value
(1,1,1,35.00),
(2,2,2,35.00),
(3,3,3,35.00),
(4,4,4,35.00),
(5,5,5,35.00);

select * from cliente
where id = "1"
