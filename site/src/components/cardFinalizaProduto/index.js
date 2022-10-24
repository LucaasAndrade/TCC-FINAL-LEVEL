import './index.scss'
import '../../common/common.scss'




export default function FinalizarCompra(props) {
    return (
        <main>
            <div>
                <div>
                    <div>
                        <h4>RESUMO DA COMPRA</h4>
                    </div>
                    <div>
                        <div>
                            <p>Qtd. Produtos:</p>
                            <p>{props.quantidade}</p>
                        </div>
                        <div>
                            <p>Frete:</p>
                            <p>{props.preco}</p>
                        </div>
                        <div>
                            <p>Total:</p>
                            <p>{props.total}</p>
                        </div>
                    </div>
                </div>
                {/*<hr />*/}
                <div>
                    <div>
                        <button>finalizar compra</button>
                    </div>
                    <div>
                        <img src='/images/cartao-azul.png' />
                        <img src='/images/cartao-amarelo.png' />
                        <img src='/images/boleto.png' />
                        <img src='/images/pix.png' />
                    </div>
                </div>
            </div>
        </main>
    )
}

    