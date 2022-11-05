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

export async function cadastrarLogin (idUsuario, usua){
    const comando = 
    `insert into  tb_login(id_usuario,ds_email,ds_senha 	) 
    values(?, ?,?)`

    const [linhas] =  await con.query(comando,[idUsuario,usua.email,usua.senha])
    return linhas [0];
}





export async function CadastrarUsuario(cliente){
    const comando =
    ` insert into tb_usuario (nm_usuario,nm_sobrenome,dt_nascimento,ds_cpf,nr_telefone,nr_telefone2)
    values (?,?, ?,?,?,?)`

    const [resposta] = await con.query(comando,[cliente.nome,cliente.sobrenome,cliente.nascimento,cliente.cpf,cliente.telefone,cliente.telefone2])

    cliente.id = resposta.insertId;
    return resposta;
}
