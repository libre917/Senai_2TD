-- Criação do banco de dados
CREATE DATABASE _chave_estrangeira;
USE _chave_estrangeira;

-- Criação da tabela de autores
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Criação da tabela de livros com ON DELETE CASCADE e ON UPDATE CASCADE
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor_id INT,
    CONSTRAINT fk_autor
        FOREIGN KEY (autor_id) REFERENCES autores(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Inserção de registros na tabela de autores
INSERT INTO autores (nome) VALUES ('Autor 1'), ('Autor 2');

-- Inserção de registros na tabela de livros
INSERT INTO livros (titulo, autor_id) VALUES ('Livro 1', 1), ('Livro 2', 2);

-- Deletando um autor e verificando a cascata de deleção nos livros
DELETE FROM autores WHERE id = 1;

-- Atualizando o ID de um autor e verificando a cascata de atualização nos livros
UPDATE autores SET id = 3 WHERE id = 2;

-- Alterando a tabela de livros para usar ON DELETE SET NULL e ON UPDATE SET NULL
ALTER TABLE livros
DROP FOREIGN KEY fk_autor;

-- Adicionando a nova chave estrangeira com ON DELETE SET NULL e ON UPDATE SET NULL
ALTER TABLE livros
ADD CONSTRAINT fk_autor
    FOREIGN KEY (autor_id) REFERENCES autores(id)
    ON DELETE SET NULL
    ON UPDATE SET NULL;

-- Inserindo novamente os registros
INSERT INTO autores (nome) VALUES ('Autor 1'), ('Autor 2');
INSERT INTO livros (titulo, autor_id) VALUES ('Livro 1', 1), ('Livro 2', 2);

-- Deletando um autor e verificando a ação SET NULL nos livros
DELETE FROM autores WHERE id = 1;

-- Atualizando o ID de um autor e verificando a ação SET NULL nos livros
UPDATE autores SET id = 4 WHERE id = 2;

-- Alterando a tabela de livros para usar ON DELETE RESTRICT e ON UPDATE RESTRICT
ALTER TABLE livros
DROP FOREIGN KEY fk_autor;

-- Adicionando a nova chave estrangeira com ON DELETE RESTRICT e ON UPDATE RESTRICT
ALTER TABLE livros
ADD CONSTRAINT fk_autor
    FOREIGN KEY (autor_id) REFERENCES autores(id)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT;

-- Inserindo novamente os registros
INSERT INTO autores (nome) VALUES ('Autor 1'), ('Autor 2');
INSERT INTO livros (titulo, autor_id) VALUES ('Livro 1', 1), ('Livro 2', 2);

-- Tentando deletar um autor que possui livros (deve falhar)
DELETE FROM autores WHERE id = 1;

-- Tentando atualizar o ID de um autor que possui livros (deve falhar)
UPDATE autores SET id = 5 WHERE id = 2;


DROP DATABASE exemplo_chave_estrangeira;