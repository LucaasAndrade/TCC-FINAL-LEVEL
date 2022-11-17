import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';
import FinalizarCompra from '../../../components/cardFinalizaProduto';

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
    carregarCarrinho();

}, [])

    return (
        <main className='page-carrinho'>
            <section>
                <Cabecalho />
            </section>

            <section>

                {itens.map(item =>
                  <CardCarrinho  
                  item={item}
                   removerItem={removerItem}
                    carregarCarrinho={carregarCarrinho} />
    
                    )}

                  </section>

                <FinalizarCompra botao='continuar compra'/>              

            <section>
                {/*<Footer />*/}
            </section>
        </main>
    )
}