import { API_URL } from "./config";

import axios from 'axios';
const api = axios.create({
    baseURL:API_URL
});



export async function enviarEmail(usuario) {
    const r = await api.post('/enviar-email', {
        email:          usuario.email.trim()
    });

    return r.data
}