
import  {Router} from 'express';
import { salvar,listar } from "../repository/EnderecoRepository.js";
const server = Router();


export async function listar(idUsuario){
    const comando = ` 
    select id_usuario_endereco		id,
    ds_cep					cep,
    ds_numero               numero,
    ds_logradouro			logradouro,
    ds_bairro				bairro,
    nm_cidade				cidade,
    nm_estado				estado,
    ds_complemento			complemento
from tb_usuario_endereco 
where id_usuario = 2;
    `
    const [registros] = await con.query(comando,[idUsuario]);
    return registros;
    }


server.post('/usuario/:id/endereco',async(req,resp)=>{
  
    try {
    const id = req.params.id;
    const endereco =req.body;
    
    const r = await salvar(id,endereco)
    resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


export default server;