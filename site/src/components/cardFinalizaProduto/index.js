import './index.scss'
import '../../common/common.scss'




export default function FinalizarCompra(props) {
    return (
        <main className='componente-compra'>
            <div className='fundo-compra'>
                <div>
                    <div>
                        <h4 className='titulo'>RESUMO DA COMPRA</h4>
                    </div>
                    <div>
                        <div className='info'>
                            <p>Qtd. Produtos:</p>
                            <p>{props.quantidade}</p>
                        </div>
                        <div className='info-meio'>
                            <p>Frete:</p>
                            <p>{props.frete}</p>
                        </div>
                        <div className='info'>
                            <p>Total:</p>
                            <p>{props.total}</p>
                        </div>
                    </div>
                </div>
                <hr className='linha' />
                <div className='compra'>
                    <div className='teste'>
                        <p>Nao sou um robo</p>
                    </div>
                    <div>
                        <button className='botao-compra'>{props.botao}</button>
                    </div>
                    <div>
                        <img src='/images/cartao-azul.png' />
                        <img className='img-pagamento' src='/images/cartao-amarelo.png' />
                        <img className='img-pagamento' src='/images/boleto.png' />
                        <img className='img-pagamento' src='/images/pix.png' />
                    </div>
                </div>
            </div>
        </main>
    )
}

    