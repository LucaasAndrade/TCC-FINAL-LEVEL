import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';
import FinalizarCompra from '../../../components/cardFinalizaProduto';

import CodigoPromocional from '../../../components/codigoPromocional';       
import { createRef, useEffect, useState } from 'react';



import Storage from 'local-storage'
import {buscarProdutoPorId} from '../../../api/cadastrarProduto';





export default function Carrinho() {
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


function removerItem(id) {
    alert('aki tambem' + id);
    let carrinho = Storage('carrinho');
    carrinho = carrinho.filter(item => item.id != id);
          
    alert(carrinho);

    Storage('carrinho', carrinho);
    carregarCarrinho();
}


async function carregarCarrinho() {
    let carrinho = Storage('carrinho');
    if (carrinho) {

        let temp = [];
        
        for (let produto of carrinho) {
            let p = await buscarProdutoPorId(produto.id);
            
            temp.push({
                produto: p,
                qtd: produto.qtd
            })
        }

        setItens(temp);
    }

}

useEffect(() => {
    carregarCarrinho();
}, [])

    return (
        <main className='page-carrinho'>
            <section>
                <Cabecalho />
            </section>

            <section>
                <FinalizarCompra quantidade='2' frete='R$ 20,00' total='R$ 189,00' botao='continuar compra'/>
            </section>

            <section>

                {itens.map(item =>
                  <CardCarrinho  
                  item={item}
                   removerItem={removerItem}
                    carregarCarrinho={carregarCarrinho} />
    
                    )}
                 
                 <div className='fundo-continuar-compra'>
                    <div className='div-titulo'>
                        <h5 className='titulo'>RESUMO DA COMPRA</h5>
                  
                    <div className='info-finalizar'>
                        <div>
                            <div className='div-info'>
                                <p className='p-info'> QTD. PRODUTOS:</p>
                                <p className='props-info'> ({qtdItens()})
                                </p>
                            </div>
                            <div className='div-info'>
                                <p className='p-info-dois'>FRETE:</p>
                                <p className='props-info-dois'>{}</p>
                            </div>
                            <div className='div-info'>
                                <p className='p-info'>TOTAL: {calcularValorTotal()} </p>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
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
                </div>

               

                <CodigoPromocional />
            </section>


            <section>
                <Footer />
            </section>
        </main>
    )
}