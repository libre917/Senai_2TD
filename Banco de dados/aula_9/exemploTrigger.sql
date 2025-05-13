# ********************************************************************************** AULA 12 - TRIGGERS ******************************************************************************

-- CRIAR BANCO DE DADOS
CREATE DATABASE Trigger_matriz;  -- Cria um banco de dados chamado 'escola'

USE Trigger_matriz;  -- Seleciona o banco de dados 'escola' para uso

-- Criação da tabela 'alunos'
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Coluna 'id' com incremento automático e chave primária
    nome VARCHAR(100) NOT NULL  -- Coluna 'nome' que não pode ser nula
);

-- Criação da tabela 'notas'
CREATE TABLE notas (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Coluna 'id' com incremento automático e chave primária
    aluno_id INT,  -- Coluna 'aluno_id' que referencia o 'id' da tabela 'alunos'
    nota DECIMAL(5, 2),  -- Coluna 'nota' com formato decimal (máximo 5 dígitos, 2 após o ponto)
    data DATE,  -- Coluna 'data' para armazenar a data da nota
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)  -- Chave estrangeira que referencia 'id' da tabela 'alunos'
);

-- Criação da tabela 'historico_notas'
CREATE TABLE historico_notas (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Coluna 'id' com incremento automático e chave primária
    aluno_id INT,  -- Coluna 'aluno_id' que referencia o 'id' da tabela 'alunos'
    nota DECIMAL(5, 2),  -- Coluna 'nota' com formato decimal (máximo 5 dígitos, 2 após o ponto)
    data DATE,  -- Coluna 'data' para armazenar a data da nota
    acao VARCHAR(50),  -- Coluna 'acao' para armazenar a descrição da ação realizada
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)  -- Chave estrangeira que referencia 'id' da tabela 'alunos'
);

-- Inserção de dados na tabela 'alunos'
INSERT INTO alunos (nome) VALUES ('João Silva'), ('Maria Oliveira'), ('Carlos Souza');  -- Insere três alunos na tabela 'alunos'

-- Inserção de dados na tabela 'notas'
INSERT INTO notas (aluno_id, nota, data) VALUES
(1, 8.5, '2025-05-01'),  -- Insere uma nota para o aluno com 'id' 1
(2, 9.0, '2025-05-02'),  -- Insere uma nota para o aluno com 'id' 2
(3, 7.5, '2025-05-03');  -- Insere uma nota para o aluno com 'id' 3


DELIMITER $$

CREATE TRIGGER after_insert_nota
AFTER INSERT ON notas
FOR EACH ROW
BEGIN
    INSERT INTO historico_notas (aluno_id, nota, data, acao)
    VALUES (NEW.aluno_id, NEW.nota, NEW.data, 'Inserção de nova nota');
END$$

DELIMITER ;

-- Inserção de nova nota na tabela 'notas'
INSERT INTO notas (aluno_id, nota, data) VALUES (1, 9.5, '2025-05-04');  -- Insere uma nova nota para o aluno com 'id' 1

-- Seleção de todos os dados da tabela 'historico_notas'
SELECT * FROM historico_notas;  -- Seleciona todos os registros da tabela 'historico_notas'