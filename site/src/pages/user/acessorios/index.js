import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';
import { listarProdutosInicio} from "../../../api/cadastrarProduto";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";






export default function Acessorios() {
    const navigate = useNavigate();
   
    const[setprodutos,setProdutos] = useState([]);
    
    async function listar(){
     const r = await  listarProdutosInicio();
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
                <div className='div-cartao'>
                    <div className='produtos'>
                    {setprodutos.map(item =>
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