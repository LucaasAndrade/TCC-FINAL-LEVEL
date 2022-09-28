CREATE DATABASE TCC2022;
USE TCC2022;
show tables;

create table tb_adm(
    id_adm            int primary key auto_increment,
    nm_adm            varchar(100),
    ds_cpf            varchar(20),
    dt_nascimento     datetime,
    ds_cargo           varchar(100)
);


create table tb_adm_login(
  id_adm_login        int primary key auto_increment,
   id_adm                int, 
   ds_chave_login         varchar(100),
   ds_senha              varchar(100),
   foreign key (id_adm) references tb_adm (id_adm)
);

create table tb_categoria(
    id_categoria     int primary key auto_increment,
    nm_categoria      varchar(100)
);

-- Marca Produto

select *
	from tb_produto;

create table tb_marca_produto(
    id_marca_produto     	int primary key auto_increment,
    nm_marca				varchar(100),
    img_marca				varchar(100)
);

use TCC2022;

show tables;

select *
	from tb_produto;
    
ALTER TABLE tb_produto
	DROP COLUMN nm_marca;

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



create table tb_imagem_produto(
    id_imagem_produto        	int primary key auto_increment,
    id_produto			int,
    img_produto              	varchar(100),
    bl_principal		bool,
    foreign key (id_produto) references  tb_produto(id_produto)
);

-- tamanho produto

select *
	from tb_produto_tamanho;

create table tb_produto_tamanho(
id_produto_tamanho        	int primary key auto_increment,
    id_produto			int,
    ds_tamanho			varchar(100),
 foreign key (id_produto) references  tb_produto(id_produto)
);

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


create table tb_usuario_favorito(
   id_usuario_favorito      int primary key auto_increment,
   id_produto               int,
   id_usuario               int,
   bl_favorito              bool,
   foreign key (id_produto) references  tb_produto(id_produto),
   foreign key (id_usuario) references  tb_usuario(id_usuario)
);



create table tb_produto_avaliacao(
id_produto_avaliacao	         int primary key auto_increment,
    id_produto                   int,
    id_usuario                   int,
    ds_avaliacao                 varchar(100),
    nr_nota                      decimal (2,1),
    bl_like			  bool,
    dt_avaliacao                 datetime,
    foreign key (id_produto) references  tb_produto(id_produto),
    foreign key (id_usuario) references   tb_usuario(id_usuario)
);

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

create table tb_cupom(
  id_cupom          int primary key auto_increment,
  nm_cupom          varchar(100),
  vl_desconto	    int,
  ds_descricao      varchar(100),
  dt_criacao        datetime,
  dt_vencimento	    datetime
);

create table tb_pedido_item(
   id_pedido_item         int primary key auto_increment,
    id_produto              int,
    id_pedido               int,
  foreign key (id_produto) references  tb_produto(id_produto),
  foreign key (id_pedido) references  tb_pedido (id_pedido)
);

create table tb_pagamento_boleto(
id_pagamento_boleto     int primary key auto_increment,
   id_pedido		int,
   ds_cod_barras        varchar(100),
  dt_venc               datetime,
  dt_criacao	        datetime,
 foreign key (id_pedido) references  tb_pedido (id_pedido)
);

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

create table tb_pagamento_pix(
id_pagamento_pix        int primary key auto_increment,
    id_pedido           int,
    ds_chave_pix        varchar(100),
    foreign key (id_pedido) references  tb_pedido (id_pedido)
);

create table tb_login(
id_login         	int primary key auto_increment,
    id_usuario		int,
    ds_email          	varchar(100),
    ds_senha	        varchar(100),
foreign key (id_usuario) references  tb_usuario(id_usuario)
);

