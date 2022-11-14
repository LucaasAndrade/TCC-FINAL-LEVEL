import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';
import { listarProdutosInicio, listarProdutosPorCategoria} from "../../../api/cadastrarProduto";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";






export default function Feminino() {
    const navigate = useNavigate();
   
    const[produtos ,setProdutos] = useState([]);
    
    async function listar(){
     const r = await  listarProdutosPorCategoria("fem");
     setProdutos(r);
    }
 
    useEffect(() => {
     listar();
    }, [])
 
    

    return (
        <main className='page-feminino' >
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                    {produtos.map(item =>
                            <Pesquisa item={item} />
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