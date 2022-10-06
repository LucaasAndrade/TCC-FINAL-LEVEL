import './index.scss'
import '../../common/common.scss'




export default function Destacar(props) {
    return (
        <main id='page-destaque'>
            <div className='cartao-produto'>
                <div>
                    <div className='numeros'>
                        <img src='/images/coracao-destac.png' />
                        <h5 className='n-destac'>{props.numero}</h5>
                    </div>
                    <img className='imagem' src={props.imagem} />
                </div>
                <div className='info'>
                    <p className='nome-produto'>{props.nome}</p>
                    <p className='preco-produto'>{props.preco}</p>
                    <div className='lixo'>
                        <img src='/images/lixeira.png' />
                    </div>
                </div>
            </div>
        </main>
    )
}