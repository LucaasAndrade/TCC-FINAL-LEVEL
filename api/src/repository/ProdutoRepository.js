import {con} from './connection.js';


export async function CadastrarProduto(produto){
    const comando =
    `insert into tb_produto (id_categoria,id_marca_produto,nm_produto,vl_preco,nm_marca,ds_informacoes,bl_disponivel, bl_destaque)
    values (?,?,?,?,?,?,?,?)`

    const [resposta] = await con.query(comando,[produto.categoria, produto.marca_produto,produto.nome,produto.preco,produto.marca,produto.informacoes,produto.disponivel,produto.destaque])
    produto.id =resposta.insertId;

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


export async function InserirTamanho(tamanho){
    const comando = 
    `insert into tb_produto_tamanho (id_produto,ds_tamanho)
    values (?,?)`

    const [resposta] = await con.query(comando,[tamanho.id_produto,tamanho.ds_tamanho])
    tamanho.id =resposta.insertId;

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
