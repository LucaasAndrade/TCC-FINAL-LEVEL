import { API_URL } from "./config";

import axios from "axios";

const api = axios.create({
    baseURL: API_URL
});

export async function CadastrarProduto(tamanho,categoria, marca_produto, nome, preco, informacoes, disponivel, destaque) {
    const r = await api.post('/produto', {
        tamanho,
        categoria,
        marca_produto,
        nome,
        preco,
        informacoes,
        disponivel,
        destaque
    });
    return r.data
}

export async function listarCategorias() {
    const r = await api.get('/listarCategorias')
    return r.data;
}

export async function listarMarcas() {
    const r = await api.get('/listarMarcas')
    return r.data;
}

export async function listarCategorias(id) {
    const r = await api.get(`/listarMarcas/${id}`)
    return r.data;
}