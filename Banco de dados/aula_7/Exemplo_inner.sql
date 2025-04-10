CREATE DATABASE EXEMPLOS_JUNCOES;
USE EXEMPLOS_JUNCOES;
-- Criação das tabelas
CREATE TABLE clientes (

id_cliente INTEGER auto_increment PRIMARY KEY,
nome TEXT NOT NULL,
email TEXT NOT NULL
);

CREATE TABLE produtos (

id_produto INTEGER auto_increment PRIMARY KEY,
nome TEXT NOT NULL,
preco REAL NOT NULL
);

CREATE TABLE pedidos (

id_pedido INTEGER auto_increment PRIMARY KEY,
id_cliente INTEGER,
id_produto INTEGER,
quantidade INTEGER,
data TEXT
);

-- Inserção de registros na tabela clientes
INSERT INTO clientes (nome, email)
VALUES ('Alice', 'alice@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Bob', 'bob@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Charlie', 'charlie@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('David', 'david@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Eve', 'eve@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Frank', 'frank@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Grace', 'grace@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Hank', 'hank@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Ivy', 'ivy@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Jack', 'jack@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Kathy', 'kathy@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Leo', 'leo@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Mona', 'mona@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Nina', 'nina@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Oscar', 'oscar@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Paul', 'paul@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Quincy', 'quincy@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Rita', 'rita@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Sam', 'sam@example.com’');
INSERT INTO clientes (nome, email)
VALUES ('Tina', 'tina@example.com’');
-- Inserção de registros na tabela produtos
INSERT INTO produtos (nome, preco)
VALUES ('Produto A', 10.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto B', 20.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto C', 30.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto D', 40.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto E', 50.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto F', 60.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto G', 70.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto H', 80.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto I', 90.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto J', 100.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto K', 110.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto L', 120.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto M', 130.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto N', 140.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto O', 150.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto P', 160.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto Q', 170.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto R', 180.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto S', 190.0);
INSERT INTO produtos (nome, preco)
VALUES ('Produto T', 200.0);
-- Inserção de registros na tabela pedidos
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (1, 1, 2, '2023-01-01’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (2, 2, 3, '2023-01-02’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (3, 3, 4, '2023-01-03’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (4, 4, 5, '2023-01-04’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (5, 5, 6, '2023-01-05’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (6, 6, 7, '2023-01-06’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (7, 7, 8, '2023-01-07’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (8, 8, 9, '2023-01-08’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (9, 9, 10, '2023-01-09’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (10, 10, 11, '2023-01-10’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (11, 11, 12, '2023-01-11’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (12, 12, 13, '2023-01-12’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (13, 13, 14, '2023-01-13’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (14, 14, 15, '2023-01-14’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (15, 15, 16, '2023-01-15’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (16, 16, 17, '2023-01-16’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (17, 17, 18, '2023-01-17’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (18, 18, 19, '2023-01-18’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (19, 19, 20, '2023-01-19’');
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data)
VALUES (20, 20, 21, '2023-01-20’');
SELECT clientes.nome AS Cliente_Nome, produtos.nome AS Produto_Nome, pedidos.quantidade, pedidos.data
FROM pedidos
INNER JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
INNER JOIN produtos ON pedidos.id_produto = produtos.id_produto;