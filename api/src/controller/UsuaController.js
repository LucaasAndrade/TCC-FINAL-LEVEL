import {  UsuaLogin,CadastrarUsuario,cadastrarLogin} from "../repository/UsuaRepository.js";
import  {Router} from 'express';
const server = Router();


server.post('/usua/login', async(req,resp)=>{
    try{
        const {email,senha} = req.body;

        const resposta = await UsuaLogin(email,senha);
        if(!resposta){
            throw new Error ('Credenciais Invalidas');
        }
        resp.send(resposta)
    }catch(err){
        resp.status(401).send({
            erro:err.message
        });
    }
})



server.post('/usuario',async(req,resp) =>{
    try{
        const client = req.body;
        const resposta= await CadastrarUsuario(client);
        
        console.log(client);
        
        const linhas = await cadastrarLogin(client.id, client.usua.email, client.usua.senha);
        

        resp.status(200).send({resposta, linhas})
      
    }catch(err){
        resp.status(401).send({
            erro:err.message
        });
    }
})
export default server;