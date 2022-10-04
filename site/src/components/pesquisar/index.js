import './index.scss'
import '../../common/common.scss'




export default function Pesquisa(props) {
    return (
        <main id='page-pesquisar'>
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