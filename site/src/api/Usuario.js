import { API_URL } from "./config";

import axios from 'axios';
const api = axios.create({
    baseURL:API_URL
});


export async function cadastrarLogin(idUsuario,usua) {
    const r = await api.post('/usuario'  , + idUsuario,usua);
    return r.data;
}



export async function CadastrarUsuario(nome,sobrenome,nascimento,cpf,telefone,telefone2){
    const r = await api.post('/usuario', { nome, sobrenome, nascimento,cpf, telefone, telefone2  });
    return r.data;
}

