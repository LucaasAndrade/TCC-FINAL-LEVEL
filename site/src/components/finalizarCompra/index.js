import './index.scss'
import '../../common/common.scss'




export default function FinalizarCompra(props) {
    return (
        <main id='page-finalizar-compra'>
            <div>
                <div>
                    <h6>RESUMO DA COMPRA</h6>
                    <div className='info-finalizar'>
                        <div>
                            <p>Qtd.PRODUTOS:</p>
                            <p>FRETE:</p>
                            <p>TOTAL:</p>
                        </div>
                        <div>
                            <p>{props.quantidade}</p>
                            <p>{props.frete}</p>
                            <p>{props.total}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div></div>
                    <button>CONTINUAR COMPRA</button>
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