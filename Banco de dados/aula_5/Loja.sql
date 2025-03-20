create database Loja;
use Loja;

create table produtos (
   ID  int auto_increment Primary Key,
   categoria text,
   classificacao text,
   preco int ,
   numero int
);
drop table produtos;
insert into produtos(categoria, classificacao, preco, numero)
value
('jogo','legal','30','7'),
('filme','legal','30','4'),
('brinquedo','legal','10','6'),
('acessorio', 'chato','10','5'),
('brinquedo','legal','20','10'),
('brinquedo','legal','20','11'),
('acessorio', 'chato','20','1'),
('brinquedo','legal','10','2'),
('brinquedo','legal','20','8'),
('acessorio', 'chato','10','3'),
('brinquedo','legal','10','9'),
('jogo', 'chato','10','12'),
('brinquedo','legal','30','14'),
('filme', 'chato','10','13'),
('filme','legal','30','17'),
('brinquedo','legal','10','18'),
('filme','legal','10','15'),
('brinquedo','legal','10','20'),
('brinquedo', 'chato','30','16'),
('filme', 'chato','10','19'),
('acessorio', 'chato','30','21'),
('acessorio','legal','20','24'),
('jogo', 'chato','20','22'),
('jogo', 'chato','10','23'),
('jogo','legal','30','26'),
('acessorio', 'chato','30','27'),
('jogo', 'chato','10','25'),
('jogo', 'chato','20','29'),
('acessorio','legal','10','31'),
('acessorio', 'chato','30','28'),
('acessorio','legal','10','30'),
('jogo', 'chato','30','32');

select *from produtos;

delete from produtos
where categoria = 'jogo';

delete from produtos
where categoria = 'acessorio';

delete from produtos
where categoria = 'filme';

delete from produtos;

select categoria from produtos
where categoria = 'jogo';

select categoria, classificacao from produtos
where classificacao = 'legal';

select categoria, classificacao, preco from produtos
where preco > 20;

select categoria from produtos
where preco < 20;

select classificacao, preco from produtos
where preco <= 20;

select categoria, numero from produtos
order by numero asc;

select categoria, numero from produtos
order by numero desc;

select *from produtos
order by numero desc
limit 10;

select *from produtos
order by rand()
limit 3;

select *from produtos
where categoria = 'brinquedo'
order by numero desc
limit 15;