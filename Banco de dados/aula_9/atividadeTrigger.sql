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

DELIMITER $$

CREATE TRIGGER after_insert_descricao
AFTER INSERT ON descricao
FOR EACH ROW
BEGIN
    INSERT INTO descricao (cor, statusfuncao, nome)
    VALUES ('preto','inocente','preto');
END$$

DELIMITER ;

show triggers;