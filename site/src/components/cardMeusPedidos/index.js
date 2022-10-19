import './index.scss'
import '../../common/common.scss'




export default function cardMeusPedidos(props) {

    return (
        <main className='page-card-pedidos'>
                <div className='cartao-carrinho'>
                    <div className='imagem-carrinho'>
                        <img className='imagem-carrinho' src={props.imagem}></img>
                    </div>
                    <div className='info-card'>
                        <div>
                            <p className='card-nome'>{props.nome}</p>
                            <p className='card-marca'>{props.marca}</p>
                        </div>
                        <div className='tama-quant'>
                            <div className='select'>
                                <p className='p-tam-qtd'>Tamanho:</p>
                                <p className='props-p'>{props.tamanho}</p>
                            </div>

                            <div className='select'>
                                <p className='p-tam-qtd'>Quantidade:</p>
                                <p className='props-p'>{props.quantidade}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}