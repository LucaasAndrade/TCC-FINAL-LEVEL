CREATE DATABASE TCC2022;
USE TCC2022;
SHOW tables;


-- TABELA ADM

create table tb_adm(
    id_adm            int primary key auto_increment,
    nm_adm            varchar(100),
    ds_cpf            varchar(20),
    dt_nascimento     datetime,
    ds_cargo           varchar(100)
);


-- AMD LOGIN

create table tb_adm_login(
  id_adm_login        int primary key auto_increment,
   id_adm                int, 
   ds_chave_login         varchar(100),
   ds_senha              varchar(100),
   foreign key (id_adm) references tb_adm (id_adm)
);

-- TABELA CATEGORIA

create table tb_categoria(
    id_categoria     int primary key auto_increment,
    nm_categoria      varchar(100)
);

-- Marca Produto


-- TABLEA MARCA PRODUTO

create table tb_marca_produto(
    id_marca_produto     	int primary key auto_increment,
    nm_marca				varchar(100),
    img_marca				varchar(100)
);

-- TABELA PRODUTO

create table tb_produto(
	id_produto         	  	int primary key auto_increment,
    id_categoria			int,
    id_marca_produto        		int,
    nm_produto        			varchar(100),
    vl_preco                		decimal(5,2),
    ds_informacoes			varchar(110),
    bl_disponivel			bool,
    bl_destaque				bool,
     foreign key ( id_categoria) references tb_categoria ( id_categoria),
     foreign key ( id_marca_produto ) references tb_marca_produto (  id_marca_produto) 
);

-- TABELA IMAGEM PRODUTO

create table tb_imagem_produto(
    id_imagem_produto        	int primary key auto_increment,
    id_produto			int,
    img_produto              	varchar(100),
    bl_principal		bool,
    foreign key (id_produto) references  tb_produto(id_produto)
);

-- tamanho produto


create table tb_produto_tamanho(
id_produto_tamanho        	int primary key auto_increment,
    id_produto			int,
    ds_tamanho			varchar(100),
 foreign key (id_produto) references  tb_produto(id_produto)
);


-- TABLEA USUÁRIO 

create table tb_usuario(
id_usuario        	 int primary key auto_increment,
  nm_usuario          	 varchar(100),
    nm_sobrenome      	 varchar(100),
    img_foto           	 varchar(100),
    dt_nascimento      	 datetime,
    ds_cpf 		 varchar(100),
    nr_telefone       	 varchar(100),
    nr_telefone2         varchar(100),
    ds_cep           	 varchar(100),
    nm_rua		 varchar(100),
    nm_estado         	 varchar(100),
    nm_cidade         	 varchar(100),
    nr_casa           	 varchar(100),
   ds_ponto_referencia	 varchar(100)
);

-- TABELA USUÁRIO FAVORITO

create table tb_usuario_favorito(
   id_usuario_favorito      int primary key auto_increment,
   id_produto               int,
   id_usuario               int,
   bl_favorito              bool,
   foreign key (id_produto) references  tb_produto(id_produto),
   foreign key (id_usuario) references  tb_usuario(id_usuario)
);



-- TABELA PRODUTO AVALIACAO

create table tb_produto_avaliacao(
id_produto_avaliacao	         int primary key auto_increment,
    id_produto                   int,
    id_usuario                   int,
    ds_avaliacao                 varchar(100),
    nr_nota                      decimal (2,1),
    bl_like			             bool,
    dt_avaliacao                 datetime,
    foreign key (id_produto) references  tb_produto(id_produto),
    foreign key (id_usuario) references   tb_usuario(id_usuario)
);


-- TABELA PEDIDO

create table tb_pedido(
	id_pedido        int primary key auto_increment,
    id_produto       int,
    id_usuario       int,
    id_cupom         int,
    dt_pedido        datetime,
    vl_total         decimal(4,2),
    ds_situacao      varchar(100),
   foreign key (id_produto) references  tb_produto(id_produto),
   foreign key (id_usuario) references   tb_usuario(id_usuario)
);

-- TABELA CUPON

create table tb_cupom(
  id_cupom          int primary key auto_increment,
  nm_cupom          varchar(100),
  vl_desconto	    int,
  ds_descricao      varchar(100),
  dt_criacao        datetime,
  dt_vencimento	    datetime
);


-- TABELA PEDIDO ITEM

create table tb_pedido_item(
   id_pedido_item         int primary key auto_increment,
    id_produto              int,
    id_pedido               int,
  foreign key (id_produto) references  tb_produto(id_produto),
  foreign key (id_pedido) references  tb_pedido (id_pedido)
);


-- TABELA PEGAMENTO BOLETOS


create table tb_pagamento_boleto(
id_pagamento_boleto     int primary key auto_increment,
   id_pedido		int,
   ds_cod_barras        varchar(100),
  dt_venc               datetime,
  dt_criacao	        datetime,
 foreign key (id_pedido) references  tb_pedido (id_pedido)
);

-- TABELA PAGAMENTO CARTÃO

create table tb_pagamento_cartao(
id_pagamento_cartao    int primary key auto_increment,
    id_pedido          int,
    nm_titular	       varchar(100),
    nr_cartao	       int,
    nr_cvv	       int,
    dt_venc_cartao     datetime,
    ds_tipo_pagamento  varchar(100),
    foreign key (id_pedido) references  tb_pedido (id_pedido)
);

-- TABLE PAGAMENTO PIX

create table tb_pagamento_pix(
id_pagamento_pix        int primary key auto_increment,
    id_pedido           int,
    ds_chave_pix        varchar(100),
    foreign key (id_pedido) references  tb_pedido (id_pedido)
);


-- TABELA LOGIN


create table tb_login(
id_login         	int primary key auto_increment,
    id_usuario		int,
    ds_email          	varchar(100),
    ds_senha	        varchar(100),
foreign key (id_usuario) references  tb_usuario(id_usuario)
);


-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **
-- ** INSERTS **


USE TCC2022;

-- CADASTRO ADM
select* from tb_adm;

insert into tb_adm (nm_adm,ds_cpf,dt_nascimento,ds_cargo)
		values ('ADM','016.558.990-67', '2000-10-05 ', 'Vendedor');
        
  select  * from tb_categoria;
  select * from tb_produto_tamanho;

-- Login

select * from tb_adm_login;

insert into tb_adm_login (id_adm,ds_chave_login,ds_senha)
		values ('1','admiin@admin.com.br', '123 ');
        
-- Alterar Login
update  tb_adm_login
    set ds_chave_login = 'admin@admin.com.br',
        ds_senha = '1234'
  where id_adm= 1;
  
-- Delata Login
delete from tb_adm_login 
where id_adm_login = '3';



--  Cadastra Categoria
select * from tb_categoria;

insert into tb_categoria (nm_categoria)
		values ('Acessorio');
        
insert into tb_categoria (nm_categoria)
		values ('Masculino');
        
insert into tb_categoria (nm_categoria)
		values ('Feminino');
        
insert into tb_categoria (nm_categoria)
		values ('Infantil');
        
-- Alterar Categoria
update  tb_categoria
    set nm_categoria = 'Acessórios'
  where id_categoria= 1;
  
-- Delata Categoria
delete from tb_categoria
where id_categoria = '6';


-- Cadastrar marca_produto
select * from tb_marca_produto;

insert into tb_marca_produto (nm_marca,img_marca)
		values ('Lacoste', 'Imagem');
        
        
-- Alterar marca_produto
update  tb_marca_produto
    set nm_marca = 'Nike',
    img_marca = 'imagem'
  where id_marca_produto= 3;
  
-- Deleta marca_produto
delete from tb_marca_produto
where id_marca_produto = '2';


-- Produto
select * from tb_produto; 

-- Inserir Produto
insert into tb_produto (id_categoria,id_marca_produto,nm_produto,vl_preco,ds_informacoes,bl_disponivel, bl_destaque)
		values (1,1,'Camiseta',911.5,'Produto de otima qualidade',true,false);
        
-- Alterar Produto
update  tb_produto
    set nm_produto = 'Blusa De Frio',
    vl_preco = 7.8,
     ds_informacoes= 'Otimo Produto',
     bl_disponivel= true,
     bl_destaque = false
  where id_produto= 15;
  
  -- Deleta Produto
delete from tb_produto
where id_produto = '15';


--  Cadastra imagem_produto
select * from tb_imagem_produto;

insert into tb_imagem_produto(id_produto,img_produto,bl_principal)
		values(1,'imagem',true);
        
-- Alterar Imagem do Produto
update  tb_imagem_produto
    set id_imagem_produto= '1',
	img_produto= 'Imagem 2',
     bl_principal= false
  where id_imagem_produto= 4;
  
-- Deleta Imagem Do Produto
delete from tb_imagem_produto
where id_imagem_produto = '1';



-- Cadastra Tamanho do Produto
select * from tb_produto_tamanho;

insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('1','PP');

insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('1','P');
	
insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('1','M');
        
insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('1','G');
        
insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('1','GG');
        
-- Alterar Tamanho Do Produto
update  tb_produto_tamanho
    set ds_tamanho= 'p'
  where id_produto_tamanho= '5';
  
-- Deleta Tamanho
delete from tb_produto_tamanho
where id_produto_tamanho = '5';


-- Cadastra Usuario
select * from tb_usuario;
insert into tb_usuario (nm_usuario,nm_sobrenome,img_foto,dt_nascimento,ds_cpf,nr_telefone,nr_telefone2,ds_cep,nm_rua,nm_estado,nm_cidade,nr_casa,ds_ponto_referencia)
		values ('Lucas',' Marcelo','Imagem Do Lucas', '2004-11-10','476.175.558-66','(11)95319-5154','(11)5921-6389','04896-300','Rua Paineira','SP', 'São Paulo','139','Proximo ao mercadinho');

insert into tb_usuario (nm_usuario,nm_sobrenome,img_foto,dt_nascimento,ds_cpf,nr_telefone,nr_telefone2,ds_cep,nm_rua,nm_estado,nm_cidade,nr_casa,ds_ponto_referencia)
		values ('Ester',' Queiroz','Imagem Da Ester', '2005-08-02','476.175.558-06','(11)95319-5154','(11)5921-6389','04896-300','Rua Paineira','SP', 'São Paulo','139','Proximo ao mercadinho');

insert into tb_usuario (nm_usuario,nm_sobrenome,img_foto,dt_nascimento,ds_cpf,nr_telefone,nr_telefone2,ds_cep,nm_rua,nm_estado,nm_cidade,nr_casa,ds_ponto_referencia)
		values ('Rayssa',' Rodrigues','Imagem Da Rayssa', '2005-10-27','476.175.558-05','(11)95319-5154','(11)5921-6389','04896-300','Rua Paineira','SP', 'São Paulo','139','Proximo ao mercadinho');


  -- Alterar Cadastro de usuario
update  tb_usuario
    set ds_cpf= '476.175.558-65',
    nr_telefone='(11)95319-5254',
    nm_estado= 'BH',
    nm_cidade= 'Bahia'
  where id_usuario= '1';
  
-- Deleta Dados do Usuario
delete from tb_usuario
where id_usuario = '1';


 --  Usuario_favorito   
 select * from  tb_usuario_favorito;
 
insert into  tb_usuario_favorito (id_produto,id_usuario,bl_favorito)
		values('1','2',true);
   
   
   
-- Alterar Favorito
update  tb_usuario_favorito
    set bl_favorito= false
  where id_usuario_favorito= '2';
  
-- Deleta Favorito
delete from tb_usuario_favorito
where  id_usuario_favorito= '2';


-- Avaliação do produto
select * from tb_produto_avaliacao;

insert into  tb_produto_avaliacao(id_produto,id_usuario,ds_avaliacao,nr_nota,bl_like,dt_avaliacao)
		values('1','2','Uma Peça Bonita',4.8,true,'2020-02-05');
        
-- Altera Avaliacao
update  tb_produto_avaliacao
    set bl_like= false,
    ds_avaliacao= ' Bonita a Roupa',
    nr_nota = 3.5
  where id_produto_avaliacao= '1';
  
-- Deleta Avaliacao
delete from tb_produto_avaliacao
where id_produto_avaliacao= '3';



-- Cadastra Cupom
select * from tb_cupom;

insert into tb_cupom (nm_cupom,vl_desconto,ds_descricao,dt_criacao,dt_vencimento)  
	values ('Lucas','20','Produtos Acimas de 20','2020-06-10','2020-06-15');
    
-- Alterar informação do cupom
update  tb_cupom
    set nm_cupom= 'Marcelo',
    vl_desconto= '200',
    ds_descricao = 'Produtos Acima de 200',
    dt_criacao ='2020-10-05',
    dt_vencimento= '2020-10-20'
  where id_cupom= '1';
  
  -- Deleta Cupom
delete from tb_cupom
where  id_cupom= '1';

    

-- Cadastra Pedido
select * from tb_pedido;

insert into tb_pedido (id_produto,id_usuario,id_cupom,dt_pedido,vl_total,ds_situacao)  
	values ('1','2','1','2022-10-05', 60.5,'Em Andamento');
    
    
-- Alterar Pedido
update  tb_pedido
    set dt_pedido= '2022-09-10',
    vl_total= '50.9',
    ds_situacao = 'Aprovado'
  where id_pedido= '1';
  
  -- Deleta pedido
-- delete from tb_pedido
-- where  id_pedido= '1';


-- Cadastra item 
select * from tb_pedido_item;



insert into tb_pedido_item (id_produto,id_pedido)
		 values ('1','1');




-- Cadastra Boleto
select * from tb_pagamento_boleto;

insert into tb_pagamento_boleto (id_pedido,ds_cod_barras,dt_venc,dt_criacao)
		values ('1','1946753214860','2022-10-05','2022-10-01');

-- Alterar Boleto
update  tb_pagamento_boleto
    set ds_cod_barras= '1946753214869',
    dt_venc= '2022-09-17',
    dt_criacao = '2022-09-19'
  where id_pagamento_boleto= '1';
  
-- Deleta boleto
delete from tb_pagamento_boleto
where  id_pagamento_boleto= '1';

-- Cadastra Cartão
select * from tb_pagamento_cartao;

insert into tb_pagamento_cartao (id_pedido,nm_titular,nr_cartao,nr_cvv,dt_venc_cartao,ds_tipo_pagamento)
		values ('1','Lucas Marcelo', '545856956','397','2023-06-19', 'Credito');
        
-- Alterar dados do Cartao
update  tb_pagamento_cartao
    set nm_titular= 'Lucas Andrande',
    nr_cartao= '589784988',
    nr_cvv = '256',
    dt_venc_cartao= '2022-05-12',
    ds_tipo_pagamento= 'Debito'
  where id_pagamento_cartao= '1';
  
-- Deleta Cartão
delete from tb_pagamento_cartao
where  id_pagamento_cartao = '1';

-- Cadastra chave pix
select * from tb_pagamento_pix;

insert into tb_pagamento_pix(id_pedido,ds_chave_pix)
		values('1','(11)95319-5154');
        
-- Altera Chave Pix
update  tb_pagamento_pix
    set ds_chave_pix= '476.175.558-06'
  where id_pagamento_pix= '1';
  
-- Deleta Chave Pix
delete from tb_pagamento_pix
where  id_pagamento_pix = '1';


-- Login Usúario
select * from  tb_login;

-- insert into  tb_login(id_usuario,ds_email,ds_senha 	) --	values('1', 'LucasMarcelo@gmail.com','123456789');

insert into  tb_login(id_usuario,ds_email,ds_senha 	) 
		values('2', 'esterq292@gmail.com','ESter12#');

insert into  tb_login(id_usuario,ds_email,ds_senha 	) 
		values('3', 'RayssaRodrigues@gmail.com','1234');
        
        select * 
			from tb_usuario;
        
        
-- Altera login
update  tb_login
    set ds_email= 'LucasMarcelo123@gmail.com',
    ds_senha= '123456'
  where id_usuario= '1';
  
  -- Deleta Login
delete from tb_login
where  id_usuario = '1';

  
