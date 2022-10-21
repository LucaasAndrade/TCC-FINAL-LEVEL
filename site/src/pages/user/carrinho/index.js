import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';
import FinalizarCompra from '../../../components/finalizarCompra';
import CodigoPromocional from '../../../components/codigoPromocional';       
import {  useEffect, useState } from 'react';


import Storage from 'local-storage'
import {buscarProdutoPorId} from '../../../api/cadastrarProduto'





export default function Carrinho() {
    const [itens,setItens] = useState([]);

    async  function carregarCarrinho(){
        let carrinho = Storage('carrinho')
        if(carrinho){
       
        for(let produto of Carrinho){
            let p = await buscarProdutoPorId(produto.id);
            console.log(p);
            setItens(...itens,{
                produto: p,
                qtd:produto.qtd
            })
        }

        }
      
    }

    useEffect(() => {
        carregarCarrinho();
    },[])

    


    return (
        <main className='page-carrinho'>
            <section>
                <Cabecalho />
            </section>
            <section>
                <CardCarrinho imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='Adidas' preco='R$ 60,00' />
                <CardCarrinho imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='Adidas' preco='R$ 60,00' />

                <FinalizarCompra quantidade='2' frete='R$20,00' total='R$ 409,90' />
                <CodigoPromocional />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}