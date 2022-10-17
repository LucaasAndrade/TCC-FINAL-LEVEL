import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';





export default function Acessorios() {

    return (
        <main className='page-acessorios'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto01.png' nome='Boné Lacoste Masculino' preco='R$ 60,00' />
                        <Pesquisa imagem='/images/produto02.png' nome='Tênis Puma Masculino' preco='R$ 260,00' />
                        <Pesquisa imagem='/images/produto03.png' nome='Gorro Champion Masculino' preco='R$ 50,90' />
                        <Pesquisa imagem='/images/produto04.png' nome='Tênis Nike Masculino' preco='R$ 380,00' />
                        <Pesquisa imagem='/images/produto05.png' nome='Tênis Vans Masculino' preco='R$ 299,00' />
                    </div> 
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto06.png' nome='Tênis Nike Masculino' preco='R$ 170,00' />
                        <Pesquisa imagem='/images/produto07.png' nome='Gorro Nike Masculino' preco='R$ 260,00' />
                        <Pesquisa imagem='/images/produto08.png' nome='Tênis Fila Masculino' preco='R$ 150,00' />
                        <Pesquisa imagem='/images/produto09.png' nome='Tênis Adidas Masculino' preco='R$ 380,00' />
                        <Pesquisa imagem='/images/produto10.png' nome='Boné New Era Masculino' preco='R$ 299,00' />
                    </div> 
                </div>           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}