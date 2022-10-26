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



