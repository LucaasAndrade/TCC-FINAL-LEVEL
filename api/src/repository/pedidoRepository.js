import {con} from './connection.js';


export async function inserirPedido(novoPedido){
    const comando = 
    `insert into tb_pedido (id_produto,id_usuario,id_cupom,dt_pedido,vl_total,ds_situacao)  
	values (?,?,?,?,?,?)`

    const [info] = await con.query(comando,[
    novoPedido.idProduto,
    novoPedido.idUsuario,
    novoPedido.idCupom,
    novoPedido.data,
    novoPedido.total,
    novoPedido.situacao
    ]);
    return info.insertId;
}


export async function inserirPagamento(novoPagemento){
    const comando = 
    `insert into tb_pagamento_cartao (id_pedido,nm_titular,nr_cartao,nr_cvv,dt_venc_cartao,nr_parcelas,ds_tipo_pagamento)
    values (?,?, ?,?,?,? ?)
`

  const [info] = await con.query(comando[
    novoPagemento.idPedido,
    novoPagemento.nome,
    novoPagemento.cartao,
    novoPagemento.codSeguranca,
    novoPagemento.vencimento,
    novoPagemento.parcelas,
    novoPagemento.formaPagamento
  ]);
  return info.affectedRows;
}

export async function inserirPedidoItem(idProduto,idPedido){
    const comando = 
    `insert into tb_pedido_item (id_produto,id_pedido)
    values (?,?);
`
const [info] = await con.query(comando,[idProduto,idPedido])
}