import {  UsuaLogin,CadastrarUsuario,cadastrarLogin} from "../repository/UsuaRepository.js";
import  {Router} from 'express';
const server = Router();


server.post('/usua/login',async(req,resp)=>{
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

server.post('/usuario/:id/login',async(req,resp)=>{
    try{
        
        const id = req.params.id;
        const login =req.body;
        
        const r = await cadastrarLogin(id,login)
        resp.status(204).send();
    }catch(err){
        resp.status(401).send({
            erro:err.message
        });
    }
})

server.post('/usuario/',async(req,resp)=>{
  
    try {
        const client = req.body;
        

        if (!client.nome)
            throw new Error('Seu Nome não foi informado!');
        if (!client.sobrenome)
            throw new Error('Seu Sobrenome não foi informado!');
        if (!client.nascimento)
            throw new Error('Sua Data De Nascimento não foi informada!');
        if (!client.cpf)
            throw new Error('Seu CPF não foi informado!');
        if (!client.telefone)
            throw new Error('Seu número de telefone não foi informado!');
        if (!client.telefone2)
            throw new Error('Seu número de telefone não foi informado!');
        
               
        

        const resposta = await CadastrarUsuario(client);
        resp.send(resposta)
        
    
    
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default server;