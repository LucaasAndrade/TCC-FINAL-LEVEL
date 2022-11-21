import './index.scss'
import '../../common/common.scss'

import { API_URL } from '../../api/config';
import { useNavigate } from 'react-router-dom'




export default function Destacar(props) {

    const navigate = useNavigate()


    function exibir(images) {
        if (!images)
        
            return `/images/imagem-nao-encontrada.jfif`;
            
        else 
            return `${API_URL}/${images}`
    }


    function formatarPreco(preco) {
        return preco.toFixed(2).replace('.', ',');
    }

    function abrirDetalhes(id) {
        navigate('/produto/' + id + '/detalhe')
    }


    return (
        <main className='page-destaque' onClick={() => abrirDetalhes(props.item.id)}>
            <div className='cartao-produto'>
                <div>
                    <div className='numeros'>
                        <img src='/images/coracao-destac.png' />
                        <h5 className='n-destac'>{props.numero}</h5>
                    </div>
                    <img className='imagem' src={exibir(props.item.imagem)} />
                </div>
                <div className='info'>
                    <p className='nome-produto'>{props.item.categoria}</p>
                    <p className='preco-produto'>R$ {formatarPreco(props.item.preco)}</p>
                    <div className='lixo'>
                        <img src='/images/lixeira.png' />
                    </div>
                </div>
            </div>
        </main>
    )
}
