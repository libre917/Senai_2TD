create database Loja;
use Loja;

create table produtos (
   ID  int auto_increment Primary Key,
   categoria text
);

insert into produtos(categoria)
value
('jogo'),
('filme'),
('brinquedo'),
('acessorio'),
('brinquedo'),
('brinquedo'),
('filme'),
('filme'),
('brinquedo'),
('filme'),
('brinquedo'),
('brinquedo'),
('filme'),
('acessorio'),
('acessorio'),
('jogo'),
('jogo'),
('jogo'),
('jogo');

select *from produtos;

delete from produtos
where categoria = 'jogo';

delete from produtos
where categoria = 'acessorio';

delete from produtos
where categoria = 'filme';

delete from produtos