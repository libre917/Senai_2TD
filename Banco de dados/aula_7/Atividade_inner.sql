create database Select_inner;
use Select_inner;

create table Tabela_1(
ID_1 integer auto_increment primary key,
nome text not null
);

create table Tabela_2(
ID_2 integer auto_increment primary key,
nome text not null
);

create table Tabela_3(
ID_3 integer auto_increment primary key,
ID_2 integer,
ID_1 integer,
Numero_Aleatorio integer
);

insert into Tabela_1 (nome)
values 
('lucas'),
('larissa'),
( 'lucio'),
( 'gabriel'),
( 'pedro');

insert into Tabela_2 (nome)
values
('souza'),
('magalhães'),
('pereira'),
('oliveira'),
('pascal');

drop table Tabela_3;
insert into Tabela_3 (ID_2, ID_1, Numero_aleatorio)
values
(1,1,100),
(2,2,200),
(3,3,300),
(4,4,400),
(5,5,500);

select Tabela_1.nome As Nome, Tabela_2.nome AS Sobrenome,Tabela_3.Numero_aleatorio
from Tabela_3
INNER JOIN Tabela_1 ON Tabela_3.ID_1 = Tabela_1.ID_1
INNER JOIN Tabela_2 ON Tabela_3.ID_2 = Tabela_2.ID_2;