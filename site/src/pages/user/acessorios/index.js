import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';
import { listarProdutosInicio, listarProdutosPorCategoria} from "../../../api/cadastrarProduto";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";






export default function Acessorios() {
    const navigate = useNavigate();
   
    const[produtos ,setProdutos] = useState([]);
    
    async function listar(){
     const r = await  listarProdutosPorCategoria("ace");
     setProdutos(r);
    }
 
    useEffect(() => {
     listar();
    }, [])
 
    

    return (
        <main className='page-acessorios' >
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                    <div className='produtos'>
                    {produtos.map(item =>
                            <Pesquisa item={item} />
                            )}
                    </div> 
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}