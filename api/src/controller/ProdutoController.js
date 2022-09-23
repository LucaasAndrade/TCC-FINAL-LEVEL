import { CadastrarProduto,InserirCategoria } from '../repository/ProdutoRepository.js';

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






export default server;