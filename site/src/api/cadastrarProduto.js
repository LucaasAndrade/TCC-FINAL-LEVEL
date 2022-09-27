import { API_URL } from "./config";

import axios from "axios";

const api = axios.create({
    baseURL: API_URL
});

export async function cadastrarProduto(categoria, marca_produto, nome, preco, marca, informacoes, disponivel, destaque) {
    const r = await api.post('/produto');
    return r.data
}
