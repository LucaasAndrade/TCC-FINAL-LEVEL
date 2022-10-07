import {con} from './connection.js';


export async function CadastrarProduto(produto) {
    console.log(produto);
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

export async function InserirImagem(imagem){
    const comando =
    `insert into tb_imagem_produto(id_produto, img_produto, bl_principal)
    values (?, ?, ?, ?)`

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