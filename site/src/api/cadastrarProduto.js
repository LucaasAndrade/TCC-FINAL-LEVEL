import { API_URL } from "./config";

import axios from "axios";

const api = axios.create({
    baseURL: API_URL
});

export async function CadastrarProduto(tamanho,categoria, marca_produto, nome, preco, marca, informacoes, disponivel, destaque) {
    const r = await api.post('/produto',{tamanho,categoria,marca_produto,nome,preco,marca,informacoes,disponivel,destaque});
    return r.data
}
