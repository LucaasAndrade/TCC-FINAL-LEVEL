import { UsuaLogin } from "../repository/loginClienteRepository";

import { Router } from "express";
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



export default server;