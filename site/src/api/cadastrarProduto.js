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
    console.log('r.data')
    console.log(r)
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

    const r = await api.put('/produto/' + id, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return r.data;
}