-- CRIAR O BANCO DE DADOS DE NOME funcoes_expressoes
create database funcoes_expressoes;

-- SELECIONAR O BANCO DE DADOS funcoes_expressoes PARA UTILIZAR
use funcoes_expressoes;

-- CRIAR A TABELA CLIENTES
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    data_nascimento DATE
);

-- CRIAR A TABELA PRODUTOS
CREATE TABLE produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100),
    descricao VARCHAR(200),
    preco DECIMAL(10, 2),
    estoque INT,
    categoria VARCHAR(100)
);

-- CRIAR A TABELA PEDIDOS
CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_produto INT,
    quantidade INT,
    data_pedido DATE,
    status VARCHAR(50)
);

-- INSERIR VALORES NA TABELA CLIENTES
INSERT INTO clientes (nome_cliente, email, telefone, endereco, data_nascimento) VALUES 
('João Silva', 'joao@example.com', '123456789', 'Rua A, 123', '1980-01-01'),
('Maria Souza', 'maria@example.com', '987654321', 'Rua B, 456', '1990-02-02'),
('Carlos Pereira', 'carlos@example.com', '456789123', 'Rua C, 789', '1985-03-03'),
('Ana Lima', 'ana@example.com', '321654987', 'Rua D, 101', '1992-04-04'),
('Pedro Santos', 'pedro@example.com', '789123456', 'Rua E, 202', '1988-05-05'),
('Fernanda Costa', 'fernanda@example.com', '654987321', 'Rua F, 303', '1995-06-06'),
('Lucas Almeida', 'lucas@example.com', '123789456', 'Rua G, 404', '1982-07-07'),
('Juliana Oliveira', 'juliana@example.com', '987321654', 'Rua H, 505', '1991-08-08'),
('Ricardo Martins', 'ricardo@example.com', '456123789', 'Rua I, 606', '1983-09-09'),
('Patricia Ferreira', 'patricia@example.com', '321987654', 'Rua J, 707', '1987-10-10'),
('Roberto Mendes', 'roberto@example.com', '789456123', 'Rua K, 808', '1984-11-11'),
('Camila Rocha', 'camila@example.com', '654321987', 'Rua L, 909', '1993-12-12'),
('Bruno Nunes', 'bruno@example.com', '123654789', 'Rua M, 1010', '1981-01-13'),
('Larissa Ribeiro', 'larissa@example.com', '987654123', 'Rua N, 1111', '1994-02-14'),
('Gustavo Carvalho', 'gustavo@example.com', '456789321', 'Rua O, 1212', '1986-03-15');


-- INSERIR VALORES NA TABELA PRODUTOS
INSERT INTO produtos (nome_produto, descricao, preco, estoque, categoria) VALUES 
('Produto A', 'Descrição do Produto A', 50.00, 100, 'Categoria 1'),
('Produto B', 'Descrição do Produto B', 30.00, 200, 'Categoria 2'),
('Produto C', 'Descrição do Produto C', 20.00, 150, 'Categoria 3'),
('Produto D', 'Descrição do Produto D', 40.00, 120, 'Categoria 1'),
('Produto E', 'Descrição do Produto E', 60.00, 80, 'Categoria 2'),
('Produto F', 'Descrição do Produto F', 70.00, 90, 'Categoria 3'),
('Produto G', 'Descrição do Produto G', 80.00, 110, 'Categoria 1'),
('Produto H', 'Descrição do Produto H', 90.00, 130, 'Categoria 2'),
('Produto I', 'Descrição do Produto I', 100.00, 140, 'Categoria 3'),
('Produto J', 'Descrição do Produto J', 110.00, 160, 'Categoria 1'),
('Produto K', 'Descrição do Produto K', 120.00, 170, 'Categoria 2'),
('Produto L', 'Descrição do Produto L', 130.00, 180, 'Categoria 3'),
('Produto M', 'Descrição do Produto M', 140.00, 190, 'Categoria 1'),
('Produto N', 'Descrição do Produto N', 150.00, 200, 'Categoria 2'),
('Produto O', 'Descrição do Produto O', 160.00, 210, 'Categoria 3');


-- INSERIR VALORES NA TABELA PEDIDOS
INSERT INTO pedidos (id_cliente, id_produto, quantidade, data_pedido, status) VALUES 
(1, 1, 2, '2025-04-01', 'Enviado'),
(2, 2, 1, '2025-04-02', 'Pendente'),
(3, 3, 3, '2025-04-03', 'Entregue'),
(4, 4, 4, '2025-04-04', 'Cancelado'),
(5, 5, 5, '2025-04-05', 'Enviado'),
(6, 6, 6, '2025-04-06', 'Pendente'),
(7, 7, 7, '2025-04-07', 'Entregue'),
(8, 8, 8, '2025-04-08', 'Cancelado'),
(9, 9, 9, '2025-04-09', 'Enviado'),
(10, 10, 10, '2025-04-10', 'Pendente'),
(11, 11, 11, '2025-04-11', 'Entregue'),
(12, 12, 12, '2025-04-12', 'Cancelado'),
(13, 13, 13, '2025-04-13', 'Enviado'),
(14, 14, 14, '2025-04-14', 'Pendente'),
(15, 15, 15, '2025-04-15', 'Entregue');

-- Consultas nas tabelas para confirmar inserção de dados
Select * From clientes;
Select * From produtos;
Select * From pedidos;
-- Funções de agregação
-- Função SUM
-- Calcular o total de produtos vendidos
select sum(quantidade) as total from pedidos;
Select sum(preco) as valor_Total from produtos;

-- Função AVG
-- Calcular preço medio
Select AVG(preco) as preco_medio from produtos;

-- Função COUNT
-- Contar o número total de clientes
Select COUNT(*) as total_de_clientes from clientes;

-- Função MAX
-- Encontrar o preço maximo dos produtos
Select MAX(preco) as preco_maximo from produtos;

-- Função MIN
-- Encontrar o preço minimp dos produtos
Select MIN(preco) as preco_maximo from produtos;


-- Funções de String

-- Função Concat
-- Concatena duas ou mais strings
select concat(nome_cliente,'-||-',email) as Contato from clientes;

-- Função LENGTH
-- Retorna o comprimento de uma string
Select Length(nome_cliente) as comprimento_nome from clientes;

-- Função Substring
-- extrair de uma  parte de uma string
Select substring(nome_cliente,1,6) as parte_nome from clientes;

-- Função UPPER
-- Letra maiuscula
select Upper(nome_cliente) as nome_maiusculo from clientes;

-- Função LOWER
-- Letra minuscula
select LOWER(nome_cliente) as nome_maiusculo from clientes;

-- Função REPLACE
-- subistitui uma parte de uma string por outra
select replace (nome_cliente, 'a', 'A') as nome_substituido from clientes;

-- Funções LEFT / RIGHT
-- extrai um numero especifico de caracteres do inicio ou final de uma string
select left (nome_cliente, 3) as inicio_nome from clientes;
select right (nome_cliente, 3) as fim_nome from clientes;

-- Função INSTR
Select instr(nome_cliente, 'a') as posicao_a from clientes;

-- Funções numericas

-- função abs
select abs(-10) as valor_absoluto;

-- funçao ceil
-- arredonda
select nome_produto, preco, ceil(preco)
as preco_arredondado from produtos;
select nome_produto, preco, floor(preco)
as preco_arredondado from produtos;

-- função round
select nome_produto, preco, round(preco, 500)
as preco_arredondado from produtos;

-- função mod
select nome_produto, estoque, MOD(estoque, 7)
as resto_divisao from produtos;

-- função power
select nome_produto, preco, power(preco, 139)
as preco_power from produtos;

-- função sqrt
select nome_produto, preco, round(sqrt(preco), 3)
as raiz_quadrada from produtos;

-- função greatest
select nome_produto, preco, estoque, greatest(preco, estoque)
as maior_valor from produtos;

-- função least
select nome_produto,preco,estoque,least(preco, estoque)
as menor_valor from produtos;

-- função sign
select 
sign(-10) as sinal_negativo;

-- função rand
select round(rand(), 2)* 100 as alguma_coisa;

-- função truncate
select truncate(4.8889325 , 1) as truncado;

-- função de data/hora
-- função now
select now() as data_e_hora;

-- função curdate
select curdate();

-- função curtime
select curtime();

-- função date_format
select date_format(curdate(), 'Dia: %d Mês: %m Ano: %Y');

-- função date_add
select date_add(curdate(),interval 100 day);

-- função date_sub
select date_sub(curdate(),interval 100 day);

-- função datediff
select datediff('2025-10-10' , '2020-12-02');

-- função timestampdiff
select timestampdiff(year, '1969-10-12' ,  '2025-04-17');

-- case
select nome_produto,
	case 
		when preco <=50 then 'barato'
		when preco <=100 then 'medio'
		else 'caro'
	end as classificacao_preco
from produtos;