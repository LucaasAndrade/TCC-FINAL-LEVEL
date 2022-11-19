import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { listarProdutosPorNome } from '../../../api/cadastrarProduto';

export default function PaginaBuscar() {
    
    const [produtos, setProdutos] = useState([]);
    const { nome } = useParams();

    async function listarProdutos() {
        let a = await listarProdutosPorNome(nome);
        setProdutos(a);
    }

    useEffect(() => {
        listarProdutos();
    }, [nome])
    

    return (
        <main className='pagina-buscar' >
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