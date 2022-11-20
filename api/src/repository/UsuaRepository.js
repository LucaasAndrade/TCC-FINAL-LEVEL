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

export async function cadastrarLogin (idUsuario,email, senha){
    const comando =
        `insert into  tb_login(id_usuario, ds_email,ds_senha) 
    values(?,?,?)`;
    const [linhas] =  await con.query(comando,[idUsuario,email,senha]) 
}

export async function CadastrarUsuario(client){
    const comando =
    ` insert into tb_usuario (nm_usuario,nm_sobrenome,dt_nascimento,ds_cpf,nr_telefone,nr_telefone2)
    values (?,?, ?,?,?,?)`

    const [resposta] = await con.query(comando,[client.nome,client.sobrenome,client.nascimento,client.cpf,client.telefone,client.telefone2])
    client.id = resposta.insertId;
    return client;
}


export async function buscarUsuario(id) {
    const comando = 
        `    
    select 
	    tb_usuario.id_usuario 		as 		id,
	    nm_usuario					as		nome,
	    nm_sobrenome				as		sobrenome,
        ds_email					as		email,
        nr_telefone					as		numero
	        from tb_usuario
        inner join tb_login on tb_usuario.id_usuario = tb_login.id_usuario
        where tb_usuario.id_usuario = ?;
    `
    const [resp] = await con.query(comando, [id])
    return resp
}