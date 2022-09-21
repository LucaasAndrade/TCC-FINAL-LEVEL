import { con } from './connection.js';

export  async function AdmLogin(email,senha) {
    const comando =`select 
                id_adm_login		        id,
            ds_chave_login		            email,
                ds_senha		            senha
        from tb_adm_login
        where 	ds_chave_login              = ?
        and ds_senha                        = ?`
    const [linhas] = await con.query(comando,[email,senha]) 
    return linhas[0];
}