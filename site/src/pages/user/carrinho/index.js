import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';
import FinalizarCompra from '../../../components/cardFinalizaProduto';

import LogoContinuarcompa from '../../../components/logoContinuarcompra'
import CardFinalizarProduto from '../../../components/cardFinalizaProduto'

import CodigoPromocional from '../../../components/codigoPromocional';
import { useEffect, useState } from 'react';



import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../../api/cadastrarProduto';


export default function Carrinho() {
    const [itens, setItens] = useState([]);
    const [total, setTotal] = useState(0);

    function qtdItens() {
        let total = 0;
        for (let item of itens) {
            total += Number(item.qtd);
        }
        return total;
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {

            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
    }


    function formatarPreco(preco) {
        preco = String(preco);
        for (let i = 0; i <= preco.length; i++) {
            if (preco[i] == ',' || preco[i] == '.') {
                return preco;
            }
            else {
                return preco + ',00'
            }
        }
    }

    function removerItem(id) {

        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    
    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

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

            <Cabecalho />

            <section className='fundo-carrinho'>
                <div className='div-carrinho'>
                    <div className='componente-pedido'>


                        {itens.map(item =>
                            <CardCarrinho
                                item={item}
                                removerItem={removerItem}
                                carregarCarrinho={carregarCarrinho}
                            />
                        )}

                    </div>
                    <div className='card-finalizar'>
                        <CardFinalizarProduto
                            alizarProduto botao='Continuar Compra'
                            quantidade={qtdItens()}
                            total={formatarPreco(calcularValorTotal())}
                            frete={"sem frete"}
                            carregarCarrinho={carregarCarrinho}
                            />
                    </div>
                </div>

            </section>

            <section className='footer'>
                <Footer />
            </section>
        </main>
    )
}