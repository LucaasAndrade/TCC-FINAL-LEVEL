import { con } from "./connection.js";

export async function UsuaLogin (email,senha){
    const comando = 
    `select 
    id_usuario      			id,
    ds_email	     			email,
    ds_senha		            senha
    from tb_login
    where 	ds_email    	       =?
    and ds_senha                   = ?`

    const [linhas] =  await con.query(comando,[email,senha])
    return linhas [0];
}
