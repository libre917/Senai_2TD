-------------------------------------------------------------------------------------------------------- AULA 11 - VIEWS -------------------------------------------------------------------------------------------------------

-- Cria um banco de dados chamado VIEWS_TURMA
CREATE DATABASE VIEWS_TURMA2TD;

-- Seleciona o banco de dados VIEWS_TURMA para uso
USE VIEWS_TURMA2TD;

-- Cria a tabela clientes
CREATE TABLE clientes (
    clienteId INT AUTO_INCREMENT PRIMARY KEY, -- id é a chave primária autoincremental
    clienteNome VARCHAR(100), -- nome do cliente
    clienteEmail VARCHAR(100) -- email do cliente
);

-- Cria a tabela pedidos
CREATE TABLE pedidos (
    idPedido INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    dataPedido DATE,
    valorPedido DECIMAL(10, 2),
    FOREIGN KEY (idCliente) REFERENCES clientes(clienteId) -- idCliente é uma chave estrangeira que referencia clientesId na tabela clientes
);

-- Insere 15 clientes na tabela clientes
INSERT INTO clientes (clienteNome, clienteEmail) 
VALUES	('João Silva', 'joao@example.com'),
		('Maria Souza', 'maria@example.com'),
		('Carlos Pereira', 'carlos@example.com'),
		('Ana Lima', 'ana@example.com'),
		('Pedro Santos', 'pedro@example.com'),
		('Paula Costa', 'paula@example.com'),
		('Lucas Almeida', 'lucas@example.com'),
		('Fernanda Oliveira', 'fernanda@example.com'),
		('Ricardo Mendes', 'ricardo@example.com'),
		('Juliana Rocha', 'juliana@example.com'),
		('Marcos Teixeira', 'marcos@example.com'),
		('Patrícia Gomes', 'patricia@example.com'),
		('Rafael Martins', 'rafael@example.com'),
		('Camila Ferreira', 'camila@example.com'),
		('Gustavo Azevedo', 'gustavo@example.com');

-- Insere 15 pedidos na tabela pedidos
INSERT INTO pedidos (idCliente, dataPedido, valorPedido) 
VALUES	(1, '2025-04-01', 150.00),
		(2, '2025-04-02', 200.00),
		(3, '2025-04-03', 250.00),
		(4, '2025-04-04', 300.00),
		(5, '2025-04-05', 350.00),
		(6, '2025-04-06', 400.00),
		(7, '2025-04-07', 450.00),
		(8, '2025-04-08', 500.00),
		(9, '2025-04-09', 550.00),
		(10, '2025-04-10', 600.00),
		(11, '2025-04-11', 650.00),
		(12, '2025-04-12', 700.00),
		(13, '2025-04-13', 750.00),
		(14, '2025-04-14', 800.00),
		(15, '2025-04-15', 850.00);
        
 -- Cria uma view chamada clientes_view que seleciona dados da tabela clientes
CREATE VIEW clientes_view AS
SELECT clienteId, clienteNome, clienteEmail
FROM clientes;

-- Consulta todos os dados da view clientes_view
SELECT * FROM clientes_view;

-- Vamos apagar todos os registros, adicionar novas colunas e inserir dados
DELETE FROM pedidos;
DELETE FROM clientes;

-- ------------------FAZER VIEWS COM CONDIÇÕES-----------------------------

-- Adiciona a coluna status na tabela clientes
ALTER TABLE clientes
ADD COLUMN status ENUM('ativo', 'inativo') DEFAULT 'ativo';

-- Adiciona a coluna estoque na tabela pedidos
ALTER TABLE pedidos
ADD COLUMN estoque INT;

-- Atualiza a coluna estoque com valores aleatórios entre 0 e 100
UPDATE pedidos
SET estoque = FLOOR(0 + RAND() * 101);

-- Insere 15 clientes na tabela clientes com status aleatório
INSERT INTO clientes (clienteNome, clienteEmail, status) 
VALUES	('João Silva', 'joao@example.com', 'ativo'),
		('Maria Souza', 'maria@example.com', 'inativo'),
		('Carlos Pereira', 'carlos@example.com', 'ativo'),
		('Ana Lima', 'ana@example.com', 'inativo'),
		('Pedro Santos', 'pedro@example.com', 'ativo'),
		('Paula Costa', 'paula@example.com', 'ativo'),
		('Lucas Almeida', 'lucas@example.com', 'inativo'),
		('Fernanda Oliveira', 'fernanda@example.com', 'ativo'),
		('Ricardo Mendes', 'ricardo@example.com', 'ativo'),
		('Juliana Rocha', 'juliana@example.com', 'inativo'),
		('Marcos Teixeira', 'marcos@example.com', 'ativo'),
		('Patrícia Gomes', 'patricia@example.com', 'ativo'),
		('Rafael Martins', 'rafael@example.com', 'inativo'),
		('Camila Ferreira', 'camila@example.com', 'ativo'),
		('Gustavo Azevedo', 'gustavo@example.com', 'ativo');

-- Insere 15 pedidos na tabela pedidos com estoque aleatório
INSERT INTO pedidos (dataPedido, valorPedido, estoque) 
VALUES	('2025-04-01', 150.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-02', 200.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-03', 250.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-04', 300.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-05', 350.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-06', 400.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-07', 450.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-08', 500.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-09', 550.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-10', 600.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-11', 650.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-12', 700.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-13', 750.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-14', 800.00, FLOOR(0 + (RAND() * 101))),
		('2025-04-15', 850.00, FLOOR(0 + (RAND() * 101)));
        
        
        create view pedidos_estoque as 
        select idPedido, dataPedido, valorPedido, estoque
        from pedidos;
        
        select *from pedidos_estoque;
        
        -- cria uma view chamada pedidos_estoque70 com estoque acima de 70
        create view pedidos_estoque70 as 
        select  idPedido, dataPedido, valorPedido, estoque
        from pedidos where estoque > 70;
        
        select *from pedidos_estoque70;
        
		-- cria uma view chamada precoMenor com estoque acima de 70
        create view precoMenor as 
        select  idPedido, dataPedido, valorPedido, estoque
        from pedidos where valorPedido <= 300;
        
        -- consulta os dados da view precoMenor
        select *from precoMenor;
        
        create view statusAtivo as 
        select clienteNome, clienteEmail, status
        from clientes where status = 'ativo';
        
        select * from statusAtivo;
        
        -- altera a view
        alter view statusAtivo as 
        select *from clientes where status = 'inativo';
        
        -- Altera valorPedido <=500 na view preco_menor
ALTER VIEW precoMenor AS
SELECT *FROM pedidos WHERE valorPedido <= 500;

        -- consulta os dados da view precoMenor
        select *from precoMenor;