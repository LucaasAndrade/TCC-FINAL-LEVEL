    import { API_URL } from "./config";


import axios from 'axios';
const api = axios.create({
    baseURL: API_URL
});

export async function loginAdm(email, senha) {
    
    
        const r = await api.post('adm/login', {
            email,
            senha
        })
        return r.data;

}