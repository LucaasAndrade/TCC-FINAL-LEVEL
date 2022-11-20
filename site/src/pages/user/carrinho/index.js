import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';
import FinalizarCompra from '../../../components/cardFinalizaProduto';

import LogoContinuarcompa from '../../../components/logoContinuarcompra'
import CardFinalizarProduto from '../../../components/cardFinalizaProduto'

import CodigoPromocional from '../../../components/codigoPromocional';       
import {  useEffect, useState } from 'react';



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
        console.log(item);
        total = total + item.produto.info.preco * item.qtd;
    }
    return total;
}


    function removerItem(id) {
    alert('Item' + id + 'removido');
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
            console.log(p);
            
            temp.push({
                produto: p,
                qtd: produto.qtd
            })
        }

        setItens(temp);
    }

}

    useEffect(() => {
        calcularValorTotal();
    }, [])

    return (

            <main className='page-carrinho'>
         
                <Cabecalho />
           


            <section className='fundo-carrinho'>
                <div className='div-carrinho'>
                    <div className='componente-pedido'>
 

                    {itens.map(item =>
                        <CardCarrinho
                            item={item}        
                            carregarCarrinho={carregarCarrinho}
                            removerItem={removerItem}  
                            />
                    
                    )}
                    
                    </div>
                    <div className='card-finalizar'>
                        <CardFinalizarProduto botao='continuar compra' />
                    </div>
                </div>

            </section>

            <section className='footer'>
                <Footer />
            </section>
        </main>
    )
        
}