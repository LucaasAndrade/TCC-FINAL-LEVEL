import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Destacar from '../../../components/destacar';
import CardMeusPedidos from '../../../components/cardMeusPedidos';
import DadosPedidos from '../../../components/dadosCardPedidos';
import { listarProdutosInicio, listarProdutosPorCategoria} from "../../../api/cadastrarProduto";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Destaques() {

    const navigate = useNavigate();
   
    const[produtos ,setProdutos] = useState([]);
    
    async function listar(){
     const r = await  listarProdutosPorCategoria("des");
     setProdutos(r);
    }
 
    useEffect(() => {
     listar();
    }, [])

    return (
        <main className='page-destaques'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                        {produtos.map(item =>
                            <Destacar item={item} />
                        )}
                        
                    </div>  
                </div>           
            </section>
                                                                                                    
            <section>
                <Footer />
            </section>
        </main>
    )
}