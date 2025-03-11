create database Fornecedores_BC;
use Fornecedores_BC;

drop table fornecedores;

create table fornecedores (
Nome varchar(100) not null,
CNPJ char(14) not null unique,
ID int Auto_increment Primary key
);

insert into fornecedores(Nome,CNPJ,ID)
value
('GM','59275792010708','01'),
('Samsung','72849361034517','02'),
('Microsoft','59374281509346','03'),
('Sony','17254893016748','04'),
('Scania','94837521604928','05'),
('Volkswagen','36287154029378','06'),
('Renault','85731920468547','07'),
('Mercedes-benz','29374018657243','08'),
('Ford','59275792018708','09'),
('Fiat','40195837265481','10'),
('Dell','31865702943875','11'),
('Logitech','58247361904286','12'),
('Intel','74019356827463','13'),
('AMD','96725410389247','14'),
('LeNovo','83462150938475','15');

select *from fornecedores;