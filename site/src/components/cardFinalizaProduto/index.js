import './index.scss'
import '../../common/common.scss'

import { useEffect, useState } from 'react';

import storage from 'local-storage'
import { buscarProdutoPorId } from '../../api/cadastrarProduto';


export default function FinalizarCompra(props) {

    return (
        <main className='componente-compra'>
            <div className='espacamento'>
                <div className='resumo'>
                    <div className='resumo-compra'>
                        <h4 className='titulo-resumo'>RESUMO DA COMPRA</h4>
                    </div>
                    <div className='informacoes'>
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
                    <div>
                        <button className='botao-compra'>{props.botao}</button>
                    </div>
                    <div className='pagamentos'>
                        <img src='/images/cartao-azul.png' />
                        <img className='img-pag' src='/images/cartao-amarelo.png' />
                        <img className='img-pag' src='/images/boleto.png' />
                        <img className='img-pag' src='/images/pix.png' />
                    </div>
                </div>
            </div>
        </main>
    )
}

    