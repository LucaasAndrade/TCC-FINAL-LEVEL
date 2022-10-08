
import multer from 'multer'

import { AlterarProduto, CadastrarProduto,buscarProduto, buscarProdutoPorId,removerProduto,InserirCategoria, InserirTamanho, listarMarcas, listarCategorias, listarTamanhosProduto, InserirImagem } from '../repository/ProdutoRepository.js';

import { VerificarInformacoesProduto } from '../services/verificacaoProduto.js'

import { Router } from 'express'
const server = Router();


const upload = multer({dest: '/storage/produto'})

server.post('/produto', async (req, resp) => {
    
    try {
        const produtoParaInserir = req.body;
        
        const produtoInserido = await CadastrarProduto(produtoParaInserir);
        VerificarInformacoesProduto(produtoParaInserir)

        for (const idTam of produtoParaInserir.tamanhosSelecionados) {
            await InserirTamanho(Number(produtoInserido.id), idTam);
        }

        resp.send({
            id: produtoInserido.id
        });
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }   
})


server.put('/produto/:id', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id
        const imagens = req.files;

        for (const imagem of imagens) {
            await InserirImagem(id, imagem.path, false);
        }

    } catch (err) {
        console.log(err)
        resp.status(400).send({

            erro: err.message
        })
    }
})


server.post('/produto/categoria',async(req,resp) =>{
    try {
        const CategoriaParaInserir = req.body;

        const CategoriaInserido = await InserirCategoria(CategoriaParaInserir);

        resp.send(CategoriaInserido);
    }catch (err){
        resp.send(400).send({
            erro: err.message
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
            erro: err.message
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


server.get('/listarMarcas', async (req, resp) => {
    try {
        const linhas = await listarMarcas();
        resp.send(linhas)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/listarCategorias', async (req, resp) => {
    try{
        const linhas = await listarCategorias();
        resp.send(linhas)
    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/listarTamanhos/:id', async (req, resp) => {
    try {
        const { id } = req.params
        const linhas = await listarTamanhosProduto(id);
        resp.send(linhas);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/admin/produto',async(req,resp)=>{
    try{
        const r = await buscarProduto();
        resp.send(r);
    }
    catch{
        resp.status(400).send({
            erro:err.message
        })
    }
} )

server.delete('/admin/produto/:id',async(req,resp) => {
    try{
        const id = req.params.id;

        
       
        await removerProduto(id);
       

        resp.status(204).send();
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/admin/produto/:id',async(req,resp) => {
    try{
        const id = req.params.id;

      const produto=  await buscarProdutoPorId(id);
      const categorias = await buscarProdutoPorId(id);
      
        resp.send({
            info: produto,
            categoria: categorias
        })
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})






export default server;