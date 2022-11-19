import { API_URL } from "./config.js";

import axios from "axios";

const api = axios.create({
    baseURL: API_URL
});

export async function CadastrarProduto(categoria, marca_produto, nome, preco, informacoes, disponivel, destaque, tamanhosSelecionados) {
    const r = await api.post('/produto', {
        categoria,
        marca_produto,
        nome,
        preco,
        informacoes,
        disponivel,
        destaque,
        tamanhosSelecionados    
    });
    return r.data
}

export async function InserirTamanho(produtoId, tamanho) {
    const r = await api.post('/produto/tamanho', {
        produtoId,
        tamanho
    });
    return r.data;
}

export async function listarCategorias() {
    const r = await api.get('/listarCategorias')
    return r.data;
}

export async function listarMarcas() {
    const r = await api.get('/listarMarcas')
    return r.data;
}

export async function listarTamanhoProduto(id) {
    const r = await api.get(`/listarTamanhos/${id}`)
    return r.data;
}


export async function salvarImagens(id, imagem1, imagem2, imagem3, imagem4, imagem5) {
    let form = new FormData();
    form.append('imagens', imagem1);
    form.append('imagens', imagem2);
    form.append('imagens', imagem3);
    form.append('imagens', imagem4);
    form.append('imagens', imagem5);

    console.log(id)
    const r = await api.put(`/admin/produto/${id}/imagem`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return r.data;
}

export async function buscarProdutos(){
    const r = await api.get ('/admin/produto');
    return r.data;
}

export async function buscarProdutoPorId(id){
    const r = await api.get ('/admin/produto/consulta/' + id);
    return r.data;
}

export async function removerProduto(id){
    const r = await api.delete ('/admin/produto/' + id);
    return r.data;
}


export async function listarProdutosInicio(){
    const r = await api.get ('/produto/listarInicio');
    return r.data;
}



export async function AlterarProduto(id, nome, marca, categoria, preco, informacoes, disponivel, destaque, tamanhosSelecionados) {
     await api.put('/admin/produto/alterar/' + id, {
        nome,
        marca,
        categoria,
        preco,
        informacoes,
        disponivel,
        destaque,
        tamanhosSelecionados,
        id
    }); 
}


export async function listarProdutosPorCategoria(categoria) {
    const r = await api.get('/user/produto/' + categoria);
    return r.data
}



export async function listarDestaques() {
    const r = await api.get('/user/destaques');
    return r.data
}


export async function listarProdutosPorNome(nome) {
    const r = await api.get('/user/produto/consulta/' + nome );
    return r.data
}