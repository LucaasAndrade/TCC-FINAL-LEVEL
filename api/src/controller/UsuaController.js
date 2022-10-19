import { CadastrarUsuario, UsuaLogin } from "../repository/loginClienteRepository.js";
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
        if (!client.cep)
            throw new Error('Seu cep não foi informado!'); 
        if (!client.rua)
            throw new Error('Sua Rua  não foi informado!'); 
        if (!client.estado)
            throw new Error('Seu Estado não foi informado!'); 
        if (!client.cidade)
            throw new Error('Sua Cidade não foi informada!'); 
        if (!client.numero)
            throw new Error(' o Numero de sua Residencia não foi informado!');
        if (!client.referencia)
            throw new Error(' Ponto de Referencia não foi informado!'); 
               
        

        const resposta = await CadastrarUsuario(client);
        resp.send(resposta)
        
    
    
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


export default server;