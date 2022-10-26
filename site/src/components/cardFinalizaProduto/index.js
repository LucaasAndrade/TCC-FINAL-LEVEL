import './index.scss'
import '../../common/common.scss'

import { useState } from 'react';




export default function FinalizarCompra(props) {
    

        const [itens,setItens] = useState([]);
     
        function qtdItens() {
         return itens.length;
     }
     
     function calcularValorTotal() {
         let total = 0;
         for (let item of itens) {
             total = total + item.produto.info.preco * item.qtd;
         }
         return total;
        }
    
    

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
                            <p>{qtdItens()}</p>
                        </div>
                        <div className='info-meio'>
                            <p>Frete:</p>
                            <p>{}</p>
                        </div>
                        <div className='info'>
                            <p>Total:</p>
                            <p>{calcularValorTotal()}</p>
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

    