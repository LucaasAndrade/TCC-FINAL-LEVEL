import {con} from './connection.js';


export async function inserirPedido(novoPedido){
    const comando = 
    `insert into tb_pedido (id_produto,id_usuario,dt_pedido,vl_total,ds_situacao)  
	                  values (?,?,?,?,?)`

    //console.log(novoPedido)                    

    const [info] = await con.query(comando,[
    novoPedido.idProduto,
    novoPedido.idUsuario,
    
    novoPedido.data,
    novoPedido.total,
    novoPedido.situacao
    ]);
    return info.insertId;
}


export async function inserirPagamento(idPedido, novoPagemento){
    const comando = 
    `insert into tb_pagamento_cartao (id_pedido,nm_titular, nr_cartao,nr_cvv,dt_venc_cartao,ds_tipo_pagamento,nr_parcelas)
    values (?,?,?,?,?,?,?)
`
  // console.log(novoPagemento);

  const [info] = await con.query(comando, [
    idPedido,
    novoPagemento.nome,
    novoPagemento.numero,
    novoPagemento.codSeguranca,
    novoPagemento.vencimento,
    novoPagemento.formaPagamento,
    novoPagemento.parcelas
  ]);
  return info.affectedRows;
}

export async function inserirPedidoItem(idPedido, idProduto){
    const comando = 
    `insert into tb_pedido_item (id_produto,id_pedido)
    values (?,?);
`
const [info] = await con.query(comando,[idProduto,idPedido])
}