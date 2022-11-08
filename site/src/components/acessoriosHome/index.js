import './index.scss'
import '../../common/common.scss'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api/config';
import { useState } from 'react';





export default function AcessoriosHome(props) {

    const navigate = useNavigate()
    

    function abrirDetalhes(id){
        navigate('/produto/' + id +'/detalhe')
    }

    function exibir(imagem){
        if(!imagem)
        return '/images/acesso2.png';

        else
        return`${API_URL}/${imagem}`
    }

    function formatarPreco(preco) {
        return preco.toFixed(2).replace('.', ',');
    }
    

    return (
        <main className='acessorios-home-page' onClick={() => abrirDetalhes(props.item.id)}>
            <div className='cartao-produto'>
                <img className='imagem' src= {exibir(props.item.imagem)} />
                <div>
                    <div className='info'>
                        <p >{props.item.produto}</p>
                        <p> R$ {formatarPreco(props.item.preco)}  </p>
                    </div>
                </div>
            </div>
        </main>
    )
}