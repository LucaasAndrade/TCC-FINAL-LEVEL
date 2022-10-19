import './index.scss'
import '../../common/common.scss'




export default function FinalizarCompra(props) {
    return (
        <main className='page-finalizar-compra'>
            <div className='fundo-continuar-compra'>
                <div>
                    <div className='div-titulo'>
                        <h5 className='titulo'>RESUMO DA COMPRA</h5>
                    </div>
                    <div className='info-finalizar'>
                        <div>
                            <div className='div-info'>
                                <p className='p-info'>Qtd.Produtos:</p>
                                <p className='props-info'>{props.quantidade}</p>
                            </div>
                            <div className='div-info'>
                                <p className='p-info-dois'>Frete:</p>
                                <p className='props-info-dois'>{props.frete}</p>
                            </div>
                            <div className='div-info'>
                                <p className='p-info'>TOTAL:</p>
                                <p className='props-info'>{props.total}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='botao-cartao'>
                    <div></div>
                    <button className='botao-compra'>CONTINUAR COMPRA</button>
                    <div className="cartoes">
                        <img src="/images/cartao-azul.png" alt="cartao-azul" />
                        <img className="icones" src="/images/cartao-amarelo.png" alt="cartao-amarelo" />
                        <img className="icones" src="/images/boleto.png" alt="boleto" />
                        <img className="icones" src="/images/pix.png" alt="pix" />
                    </div>
                </div>
            </div>
        </main>
    )
}