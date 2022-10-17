  import { API_URL } from "./config";

import axios from 'axios';
const api = axios.create({
    baseURL:API_URL
});

export async function loginUsua(email,senha){

    const r = await api.post('/usua/login',{
        email,
        senha
    })
    return r.data;
}


export async function CadastrarUsuario(nome,sobrenome,nascimento,cpf,telefone,telefone2,cep,rua,estado,cidade,numero,referencia){
    const r = await api.post('/usuario', { nome, sobrenome, nascimento,cpf, telefone, telefone2, cep, rua,estado,cidade,numero,referencia  });
    return r.data
}
