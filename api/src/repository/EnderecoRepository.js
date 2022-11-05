import { con } from "./connection.js";



export async function listar(idUsuario){
    const comando = 
  
    ` select id_usuario_endereco		id,
    ds_cep					cep,
    ds_numero               numero,
    ds_logradouro			logradouro,
    ds_bairro				bairro,
    nm_cidade				cidade,
    nm_estado				estado,
    ds_complemento			complemento
from tb_usuario_endereco 
where id_usuario = ?`
    const [registros] = await con.query(comando,[idUsuario]);
    return registros;
    }
    



    export async function salvar(idUsuario, endereco) {
        const comando = `
        insert into tb_usuario_endereco (id_usuario,  ds_cep, ds_logradouro, ds_bairro, nm_cidade, nm_estado, ds_numero, ds_complemento)
                                 values (?,  ?, ?, ?, ?, ?, ?, ?)
        `
    
        const [info] = await con.query(comando, [idUsuario,  endereco.cep, endereco.logradouro, endereco.bairro, endereco.cidade, endereco.estado, endereco.numero, endereco.complemento]);
        return info.insertId;
    }
    