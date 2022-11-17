import {con} from './connection.js';

export async function buscarCupom(cod){
    const comando =
    `  select id_cupom      id,
    nm_cupom      nome,
    vl_desconto   desconto,
    ds_descricao  descricao,
    dt_vencimento vencimento
    from tb_cupom
     where id_cupom= ?`

const [linhas] = await con.query(comando,[cod])
return linhas[0];
}


export async function atualizarCupom(cod){
    const comando = 
    `update  tb_cupom
    set nm_cupom       nome,
    vl_desconto        desconto,
    ds_descricao       descricao,
    dt_criacao           criacao,
    dt_vencimento       vencimento
  where id_cupom= ?;
`
const [info] = await con.query(comando,[cod])
return info.affectedRows;
}