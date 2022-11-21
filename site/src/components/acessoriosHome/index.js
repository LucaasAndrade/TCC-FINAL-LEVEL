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
        return '/images/imagem-nao-encontrada.jfif';

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
                        <p className='nome-produto'>{props.item.produto}</p>
                        <p className='preco-produto'> R$ {formatarPreco(props.item.preco)}  </p>
                    </div>
                </div>
            </div>
        </main>
    )
}