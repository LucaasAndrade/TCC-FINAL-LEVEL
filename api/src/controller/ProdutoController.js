import { AlterarProduto, CadastrarProduto,InserirCategoria, InserirTamanho } from '../repository/ProdutoRepository.js';

import { Router } from 'express'
const server = Router();

server.post('/produto',async(req,resp) =>{
    try {
        const produtoParaInserir = req.body;

        const produtoInserido = await CadastrarProduto(produtoParaInserir);

        resp.send(produtoInserido);
    }catch (err){
        resp.send(400).send({
            erro:err.message
        })
    }
})

server.post ('/produto/categoria',async(req,resp) =>{
    try {
        const CategoriaParaInserir = req.body;

        const CategoriaInserido = await InserirCategoria(CategoriaParaInserir);

        resp.send(CategoriaInserido);
    }catch (err){
        resp.send(400).send({
            erro:err.message
        })
    }
})

server.post('/produto/tamanho',async(req,resp) =>{
    try {
        const TamanhoParaInserir = req.body;

        const TamanhoInserido = await InserirTamanho(TamanhoParaInserir);

        resp.send(TamanhoInserido);
    }catch (err){
        resp.send(400).send({
            erro:err.message
        })
    }
})


server.put('/produto/:id',async(req,resp)=>{
    try{
        const {id} = req.params;
        const produto = req.body;

        if (!produto.nome)
            throw new Error('Nome do produto é obrigatorio!');

        if (!produto.preco)
            throw new Error('Preço do produto é obrigatorio!');  
        
        if (!produto.marca)
            throw new Error('Marca do produto é obrigatorio!'); 
        
        if (!produto.informacoes == undefined || produto.informacoes < 0)
            throw new Error('Informações do produto é obrigatorio!');   
        
        if (!produto.disponivel == undefined)
            throw new Error('Verificar se o produto esta disponivel!');  
            
        if (!produto.destaque)
            throw new Error('Destaque é obrigatorio!');  

        const resposta = await AlterarProduto(id,produto); 
        if (resposta !=1)
         throw new Error('Produto não pode ser alterado');
     else 
      resp.status(204).send();

    }catch(err){
        resp.send(400).send({
            erro:err.message
        })
    }
})





export default server;