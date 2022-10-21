import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';
import { listarProdutosInicio} from "../../../api/cadastrarProduto";
import { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";




export default function Infantil() {

    return (
        <main className='page-infantil'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto33.png' nome='Moletom Vans Masculino' preco='R$ 80,00' />
                        <Pesquisa imagem='/images/produto34.png' nome='Shorts Street Feminino' preco='R$ 59,90' />
                        <Pesquisa imagem='/images/produto35.png' nome='Calça Street Masculino' preco='R$ 89,90' />
                        <Pesquisa imagem='/images/produto36.png' nome='Camiseta Street Masculino' preco='R$ 70,00' />
                        <Pesquisa imagem='/images/produto37.png' nome='Moletom Puma Feminino' preco='R$ 89,90' />
                    </div> 
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto42.png' nome='Jaqueta Street Masculino' preco='R$ 60,00' />
                        <Pesquisa imagem='/images/produto38.png' nome='Calça Street Feminino' preco='R$ 100,00' />
                        <Pesquisa imagem='/images/produto39.png' nome='Moletom Vans Masculino' preco='R$ 80,00' />
                        <Pesquisa imagem='/images/produto40.png' nome='Calça Street Feminino' preco='R$ 100,00' />
                        <Pesquisa imagem='/images/produto41.png' nome='Camiseta Street Masculino' preco='R$ 90,00' />
                    </div> 
                </div>           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}