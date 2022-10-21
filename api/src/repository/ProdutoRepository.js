import {con} from './connection.js';


export async function CadastrarProduto(produto) {
    const comando =
    `insert into tb_produto (id_categoria, id_marca_produto, nm_produto, vl_preco, ds_informacoes, bl_disponivel, bl_destaque)
    values (?,?,?,?,?,?,?)`
    const [resposta] = await con.query(comando,
        [
            produto.categoria,
            produto.marca_produto,
            produto.nome,
            produto.preco,
            produto.informacoes,
            produto.disponivel,
            produto.destaque
        ]);
    produto.id = resposta.insertId;

    return produto;

}



export async function InserirCategoria(categoria){
    const comando =
    `insert into tb_categoria (nm_categoria)
    values (?)`

    const [resposta] = await con.query(comando,[categoria.nm_categoria])
    categoria.id =resposta.insertId;

    return categoria;
}

export async function InserirImagem(id_produto,imagem, bl_principal){
    const comando =
    `insert into tb_imagem_produto(id_produto, img_produto, bl_principal)
    values (?, ?, ?)`

    const [resposta] = await con.query(comando, [id_produto, imagem, bl_principal]);
}

export async function InserirTamanho(tamanhoProduto,tamanho){
    const comando = 
    `insert into tb_produto_tamanho (id_produto,ds_tamanho)
    values (?,?)`

    const [resposta] = await con.query(comando,[tamanhoProduto,tamanho])
    return tamanho;

}

export  async function AlterarProduto(id,produto){
    const comando =
    `update  tb_produto
    set nm_produto =?,
    vl_preco =      ?,
    nm_marca=       ?,
    ds_informacoes= ?,
     bl_disponivel= ?,
     bl_destaque =  ?
  where id_produto= ?`

  const [resposta] = await con.query(comando,[produto.nome,produto.preco,produto.marca,produto.informacoes,produto.disponivel,produto.destaque,id])
  return resposta.affectedRows;
}

export async function listarMarcas() {
    const comando = `
        select *
            from tb_marca_produto
    `

    const [resposta] = await con.query(comando);
    return resposta
};


export async function listarCategorias() {
    const comando = 
        `
        select *
            from tb_categoria
        `
    const [resposta] = await con.query(comando);
    return resposta;
}

export async function listarTamanhosProduto(id) {
    const comando =
        `
        select ds_tamanho as tamanho
        from tb_produto_tamanho
        where id_produto = ?;
        
        `
    const [resposta] = await con.query(comando, [id]);
    return resposta
}

export async function buscarProduto(){
    const comando = 
    `select  tb_produto.id_produto      as id,
    nm_produto                          as produto,
    vl_preco                            as preco,
    tb_produto.nm_marca                 as marca,
    ds_informacoes                      as informacoes,
    bl_disponivel                       as disponivel,
    bl_destaque                         as destaque
from tb_produto
inner  join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
inner join tb_marca_produto on tb_produto.id_marca_produto = tb_marca_produto.id_marca_produto;
`
  const [registros] = await con.query(comando);
  return registros
}

export async function buscarProdutoPorId(id){
    const comando = 
    `select  id_produto      as id,
    nm_produto                          as produto,
    vl_preco                            as preco,
    tb_produto.nm_marca                 as marca,
    ds_informacoes                      as informacoes,
    bl_disponivel                       as disponivel,
    bl_destaque                         as destaque,
    id_categoria                        as categoria,
    id_marca_produto                    as marcaProduto
from tb_produto
where id_produto =?
`
  const [registros] = await con.query(comando,[id]);
  return registros [0];
}





export async function removerProduto(idProduto){
    const comando =
    `delete from tb_produto
    where id_produto = ?
    `

    const [resp] = await con.query(comando,[idProduto])
    return resp.affectedRows;
}


export async function listarProdutosInicio(){
    const comando = 
   ` select tb_produto.id_produto         				id,
   nm_categoria                                       categoria,
   nm_marca											marca,
   nm_produto              			  				produto,
   vl_preco                		                    preco,
   ds_informacoes                                     informacoes,
   bl_disponivel                                      disponivel,
   bl_destaque                                        destaque,
  min(img_produto)                                   imagem
   from tb_produto
   inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
   inner join tb_marca_produto on tb_produto.id_produto = tb_produto.id_produto
   left join tb_imagem_produto on tb_produto.id_produto = tb_produto.id_produto
   group 
   by  tb_produto.id_produto,    				
   nm_categoria,                                
   nm_marca,									
   nm_produto,              			  				
   vl_preco,                		                    
   ds_informacoes,                                     
   bl_disponivel,                                      
   bl_destaque                                    
  `
  const [ registros] = await con.query(comando)
  return registros;
}



