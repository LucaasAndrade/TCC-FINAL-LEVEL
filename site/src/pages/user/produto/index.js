import './index.scss'

import { useNavigate, useParams } from "react-router-dom";

import storage from 'local-storage';

 
import Cabecalho from '../../../components/header'
import Footer from '../../../components/footer'
import CardCarrinho from '../../../components/CardCarrinho';
import { useEffect, useState } from 'react';
import { buscarProdutoPorId } from '../../../api/cadastrarProduto';





export default function Produto(props) {
    const [produto,setProduto] = useState({categoria:[], imagem:[], info:[]})

    const {id } = useParams();

   async function carregarPagina(){
     const r = await   buscarProdutoPorId(id)
    setProduto(r)
    }

    useEffect(() => {
        carregarPagina();
    },[])

    

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


    function adicionarAoCarrinho(){
        let carrinho = [];
        if(storage('carrinho')){
            carrinho = storage('carrinho');
        }

        if(!carrinho.find(item => item.id === id)){
        carrinho.push({
            id:id,
            qtd:1
        })
        storage('carrinho',carrinho);
    }
      alert ('Produto Adicionada Ao Carrinho!');
    }


    return (
        <main className='page-produto'>
            <header className='cabecalho'>
                <Cabecalho />
            </header>
            <section>
                <div>
                    <div>
                        <div>
                            <p>destaques</p>
                        </div>
                        <div>
                            {/*carrosel*/}
                        </div>
                    </div>
                    <div>
                        <div>
                            <img></img>
                        </div>
                        <div>
                            <h2>{produto.info.produto}</h2>
                            <p>{produto.info.marca}</p>
                            <p>{produto.info.preco}</p>
                        </div>
                        <div>
                            <select>
                                <option value="" selected disabled hidden></option>
                                <option value="PP"> PP </option>
                                <option value="P"> P </option>
                                <option value="M"> M </option>
                                <option value="G"> G </option>
                                <option value="GG"> GG </option>
                            </select>

                            <select className='select'>
                                <option value="" selected disabled hidden></option>
                                <option>{props.quantidade}</option>
                            </select>
                        </div>
                        <div>
                            <p>{props.situacao}</p>
                        </div>
                            <div>
                                <button className='botao-adicionar' onClick={adicionarAoCarrinho}>adicionar ao carrinho</button>
                                <div>
                                    <button><img src='/images/curtidos.png'></img> </button>
                                </div>
                            </div>
                        <div>
                            <p>tabela de medidas</p>
                        </div>

                        <div>
                            <p>Calcular frete e entrega</p>
                            <input type='text'></input>
                            <button className='botao-calcular'>calcular</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}