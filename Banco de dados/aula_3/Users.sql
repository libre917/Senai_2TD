create database Users_BC;
use Users_BC;

drop table Usuarios;
create table Usuarios (
ID  int auto_increment Primary Key,
nome text default'Vazio',
CPF char(14) default 'Vazio',
email varchar(50) default 'Vazio',
telefone varchar(15) default 'Vazio'
);

Insert Into Usuarios(nome,CPF,email,telefone)
value 
('Alice Silva', '123.456.789-00', 'alice.silva@email.com', '(11) 91234-5678'),
('Bruno Costa', '234.567.890-11', 'bruno.costa@email.com', '(11) 92345-6789'),
('Carla Santos', '345.678.901-22', 'carla.santos@email.com', '(11) 93456-7890'),
('Daniel Oliveira', '456.789.012-33', 'daniel.oliveira@email.com', '(11) 94567-8901'),
('Erika Lima', '567.890.123-44', 'erika.lima@email.com' ,'(11) 95678-9012'),
('Felipe Souza', '678.901.234-55', 'felipe.souza@email.com', '(11) 96789-0123'),
('Gabriela Mendes', '789.012.345-66', 'gabriela.mendes@email.com', '(11) 97890-1234'),
('Henrique Pereira', '890.123.456-77', 'henrique.pereira@email.com', '(11) 98901-2345'),
('Isabella Nunes', '901.234.567-88', 'isabella.nunes@email.com', '(11) 99012-3456'),
('João Carvalho', '012.345.678-99', 'joao.carvalho@email.com', '(11) 90123-4567'),
('Karen Rocha', '123.456.789-00', 'karen.rocha@email.com', '(11) 91234-5678'),
('Leonardo Ribeiro', '234.567.890-11', 'leonardo.ribeiro@email.com', '(11) 92345-6789'),
('Mariana Ferreira', '345.678.901-22', 'mariana.ferreira@email.com', '(11) 93456-7890'),
('Nicolas Martins', '456.789.012-33', 'nicolas.martins@email.com', '(11) 94567-8901'),
('Paula Almeida', '567.890.123-44', 'paula.almeida@email.com', '(11) 95678-9012');

select * from Usuarios;