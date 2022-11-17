import './index.scss'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import Cabecalho from '../../../components/header'
import Footer from '../../../components/footer'
import ComponenteDestaques from '../../../components/destaques'
import CarroselMarcas from '../../../components/carroselmarcas'
import AcessoriosHome from '../../../components/acessoriosHome'
import { listarDestaques, listarProdutosInicio, listarProdutosPorCategoria } from "../../../api/cadastrarProduto";
import Pesquisa from '../../../components/pesquisar';




export default function Home() {

    const [produtos, setProdutos] = useState([]);
    const [produtosDestaque, setProdutosDestaque] = useState([]);

    console.log(produtosDestaque);

    async function listar() {
        const r = await listarProdutosPorCategoria("ace");
        setProdutos(r);
    }

    
    async function listarProdutosDestaques() {
        const r = await listarDestaques();
        setProdutosDestaque(r);
    }

    useEffect(() => {
        listar();
        listarProdutosDestaques();
    }, [])

    const navigate = useNavigate('');

    function AcessoriosPage() {
        navigate("/acessorios")
    }

    function Destaques() {
        navigate("/destaques")
    }

    function Feminino() {
        navigate("/feminino")
    }

    function Masculino() {
        navigate("/masculino")
    }

    function Infantil() {
        navigate("/infantil")
    }


    return (
        <main className='page-lading'>
            <header className='cabecalho'>
                <Cabecalho />
            </header>
            <section className='fundo-home'>
                <div>
                    <img className='imagem-inicio' src='/images/imagem-inicio.png' alt='imagem-principal' />
                </div>
            </section>

            <section className='fundo-acessorios'>
                <div className='acesso'>
                    <div className='acessorios-info'>
                        <button className='botao-acessorios'>DESTAQUES</button>
                        <h5 className='p-ver-mais' onClick={Destaques}>Ver mais >> </h5>
                    </div>
                    <div className='produtos'>
                        {produtosDestaque.map(item =>
                                <Pesquisa item={item} />
                                )}
                    </div>
                </div>
            </section>

            <section className='categorias'>
                <div className='fundo-categorias'>
                    <button className='p-categoria'>COMPRE POR CATEGORIA</button>
                </div>
                <div className='img-categoria'>
                    <img src='/images/feminino.png' alt='img-feminino' onClick={Feminino} />
                    <img className='imagem-cate' src='/images/masculino1.png' alt='img-masculino' onClick={Masculino} />
                    <img className='imagem-cate' src='/images/infantil.png' alt='img-infantil' onClick={Infantil} />
                </div>
            </section>

            <section className='fundo-acessorios'>
                <div className='acesso'>
                    <div className='acessorios-info'>
                        <button className='botao-acessorios'>ACESSÓRIOS</button>
                        <h5 className='p-ver-mais' onClick={AcessoriosPage}>Ver mais >> </h5>
                    </div>
                    <div className='produtos'>
                        {produtos.map(item =>
                            <AcessoriosHome item={item} />
                        )}
                    </div>
                </div>
            </section>

            <section className='fundo-marcas'>
                <div>
                    <div className='div-marcas'>
                        <p className='p-marcas'>MARCAS</p>
                    </div>
                    <div>
                        <CarroselMarcas />
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>

        </main>
    )
}