import { API_URL } from "./config";


import axios from 'axios';
const api = axios.create({
    baseURL: API_URL
});


export async function salvar(idUsuario,  cep, logradouro, bairro, cidade, estado, numero, complemento) {
    const r = await api.post('/usuario/' + idUsuario + '/endereco', {  cep, logradouro, bairro, cidade, estado, numero, complemento });
    return r.data;
}
