import './index.scss'
import '../../common/common.scss'
import { useNavigate } from 'react-router-dom'





export default function AcessoriosHome(props) {

    const navigate = useNavigate()
    

    function abrirDetalhes(id){
        navigate('/produto/' + id +'/detalhe')
    }

    return (
        <main id='acessorios-home-page' onClick={() => abrirDetalhes(props.item.id)}>
            <div className='cartao-produto'>
                <img className='imagem' src={props.imagem} />
                <div>
                    <div className='info'>
                        <p className='nome-produto'>{props.nome}</p>
                        <p className='preco-produto'>{props.preco}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}