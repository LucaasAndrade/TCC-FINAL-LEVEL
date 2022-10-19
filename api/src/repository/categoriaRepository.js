import { con } from './connection.js';


export async function listarCategorias() {
    const comando = 
        `
        select *
            from tb_categoria
        `
    const [resposta] = await con.query(comando);
    return resposta;
}