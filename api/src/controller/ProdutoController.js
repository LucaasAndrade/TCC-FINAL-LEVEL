
import multer from 'multer'

import { AlterarProduto, CadastrarProduto,buscarProduto, buscarProdutoPorId,removerProduto,InserirCategoria, InserirTamanho, listarMarcas, listarCategorias, listarTamanhosProduto, InserirImagem,listarProdutosInicio,buscarProdutoImagens, removerProdutoImagem, removerProdutoTamanho, buscarProdutoTamanhos, removerProdutoImagemDiferenteDe, buscarProutosPorCategoria, buscarDestaques } from '../repository/ProdutoRepository.js';

import { VerificarInformacoesProduto } from '../services/verificacaoProduto.js'

import { Router } from 'express'
const server = Router();


const upload = multer({dest: 'storage/produto'})

server.post('/produto', async (req, resp) => {
    
    try {
        const produtoParaInserir = req.body;
        
        VerificarInformacoesProduto(produtoParaInserir)
        const produtoInserido = await CadastrarProduto(produtoParaInserir);
    
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


server.put('/admin/produto/:id/imagem', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id
        const imagens = req.files;
        const imgs = req.body.imagens.filter(item => item != 'undefined');

        if(imgs.length > 0)
            await removerProdutoImagemDiferenteDe(imgs, id);

        else {
            await removerProdutoImagem(id)
        }
        
        for (const imagem of imagens) {
            await InserirImagem(id, imagem.path, false);
        }

    } catch (err) {
        resp.status(400).send({

            erro: err.message
        })
    }
})


server.post('/produto/categoria', async(req,resp) =>{
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
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
} )

server.delete('/admin/produto/:id',async(req,resp) => {
    try{
        const id = req.params.id;

        await removerProdutoImagem(id);
        await removerProdutoTamanho(id); 
        await removerProduto(id);
       

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/admin/produto/consulta/:id',async(req,resp) => {
    try{
        const id = req.params.id;

        const produto=  await buscarProdutoPorId(id);
        const tamanhos = await buscarProdutoTamanhos(id);
        const imagens = await buscarProdutoImagens(id)

        resp.send({
            info: produto,
            tamanhos: tamanhos,
            imagem: imagens
        })
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/produto/listarInicio',async(req,resp) => {
    try{
      

      const r =  await listarProdutosInicio();
       resp.send(r)

    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})


/// #### CONTROLLER PARA ALTERAR PRODUTO ###

server.put('/admin/produto/alterar/:id', async (req, resp) => {
    try {
        const id = req.params.id;        
        const produto = req.body;

        // REMOVER INFORMAÇÕES JÁ CADASTRADAS
        await removerProdutoTamanho(id)

        // INSERIR INFORMAÇÕES APAGADAS
        

        for (const idTam of produto.tamanhosSelecionados) {
            await InserirTamanho(Number(id), idTam);
        }
        await AlterarProduto(id, produto)
        
        
        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



// ## Consultar Produtos por Categoria ##

server.get('/user/produto/:categoria', async (req, resp) => {
    try {
        const categoria = req.params.categoria;

        const r = await buscarProutosPorCategoria(categoria);
        resp.send(r);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})



server.get('/user/destaques', async (req, resp) => {
    try {
        const r = await buscarDestaques();
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;