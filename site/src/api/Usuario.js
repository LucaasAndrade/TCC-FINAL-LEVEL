import { API_URL } from "./config";

import axios from 'axios';
const api = axios.create({
    baseURL:API_URL
});


export async function CadastrarUsuario(nome, sobrenome, nascimento, cpf, telefone, telefone2, email, senha) {
    const r = await api.post('/usuario', {
        nome, sobrenome, nascimento, cpf, telefone, telefone2, usua: {
        email,
        senha
        }
    });
    return r.data;
}

