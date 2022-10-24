import './index.scss'
import '../../common/common.scss'
import { API_URL } from '../../api/config';
import { useNavigate } from 'react-router-dom'


export default function Pesquisa(props) {
    
    const navigate = useNavigate()


    function exibir(images) {
        if (!images)
        
            return `/images/produto04.png`;
            
           
            
        else 
            return `${API_URL}/${images}`
    }

    
    function exibiir(images) {
        if (!images)
        
            return `/images/produto05.png`;
            
           
            
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
        <main className='page-pesquisar' onClick={() => abrirDetalhes(props.item.id)}>
                <div className='cartao-produto'>
                     <img  src={exibir(props.item.images)}  /> 
                     
                    <div>
                        <div className='info'>
                        <div> {props.item.categoria} </div>
                    <div> {props.item.produto} </div>
                    <div> R$ {formatarPreco(props.item.preco)} 
                    </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}