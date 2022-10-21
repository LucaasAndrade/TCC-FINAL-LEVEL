import './index.js'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';
import { listarProdutosInicio} from "../../../api/cadastrarProduto";
import { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";






export default function ProdutoDetalhe() {
  
    

    return (
        <main className='page-acessorios' >
            <section>
                <Cabecalho />
           </section>
           <div className="faixa-header">
          <div >
            <img src="/images/Rectangle 115.png" alt="retangulo" />
          </div>
          </div>
        </main>
    )
}