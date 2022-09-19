USE TCC2022;

-- CADASTRO ADM
select* from tb_adm;

insert into tb_adm (nm_adm,ds_cpf,dt_nascimento,ds_cargo)
		values ('ADM','016.558.990-67', '2000-10-05 ', 'Vendedor');
        
-- Alterar Cadastro 
update  tb_adm
    set nm_adm = 'Adm',
        ds_cpf = '016.558.990-66',
        dt_nascimento= '2000-10-07',
        ds_cargo = 'Gerente'
  where id_adm= 1;
  

-- Login

select * from tb_adm_login;

insert into tb_adm (id_adm,ds_chave_login,ds_senha)
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
		values ('Adidas', 'Imagem.png');
        
        
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
insert into tb_produto (id_categoria,id_marca_produto,nm_produto,vl_preco,nm_marca,ds_informacoes,bl_disponivel, bl_destaque)
		values (1,3,'Camiseta',9.5,'Nike','Produto de otima qualidade',true,false);
        
-- Alterar Produto
update  tb_produto
    set nm_produto = 'Blusa De Frio',
    vl_preco = 7.8,
     nm_marca= 'Adidas',
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
		values(16,'imagem',true);
        
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
		values ('16','PP');

insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('16','P');
	
insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('16','M');
        
insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('16','G');
        
insert into tb_produto_tamanho (id_produto,ds_tamanho)
		values ('16','GG');
        
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
		values('16','2',true);
   
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
		values('16','2','Uma Peça Bonita',4.8,true,'2020-02-05');
        
-- Altera Avaliacao
update  tb_produto_avaliacao
    set bl_like= false,
    ds_avaliacao= ' Bonita a Roupa',
    nr_nota = 3.5
  where id_produto_avaliacao= '1';
  
-- Deleta Avaliacao
delete from tb_produto_avaliacao
where id_produto_avaliacao= '3';

  




  

        
        
        
        
        




        
        

  
        
        
	




        
