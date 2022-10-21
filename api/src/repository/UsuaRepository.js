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

export async function CadastrarUsuario(cliente){
    const comando =
    ` insert into tb_usuario (nm_usuario,nm_sobrenome,dt_nascimento,ds_cpf,nr_telefone,nr_telefone2,ds_cep,nm_rua,nm_estado,nm_cidade,nr_casa,ds_ponto_referencia)
    values (?,?, ?,?,?,?,?,?,?, ?,?,?)`

    const [resposta] = await con.query(comando,[cliente.nome,cliente.sobrenome,cliente.nascimento,cliente.cpf,cliente.telefone,cliente.telefone2,cliente.cep,cliente.rua,cliente.estado,cliente.cidade,cliente.numero,cliente.referencia])

    cliente.id = resposta.insertId;
    return resposta;
}
