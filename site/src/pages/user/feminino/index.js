import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';





export default function Feminino() {

    return (
        <main id='page-feminino'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto21.png' nome='Boné Lacoste Masculino' preco='R$ 60,00' />
                        <Pesquisa imagem='/images/produto22.png' nome='Tênis Puma Masculino' preco='R$ 260,00' />
                        <Pesquisa imagem='/images/produto23.png' nome='Gorro Champion Maculino' preco='R$ 50,00' />
                        <Pesquisa imagem='/images/produto24.png' nome='Tênis Nike Masculino' preco='R$ 380,00' />
                        <Pesquisa imagem='/images/produto25.png' nome='Tênis Vans Maculino' preco='R$ 299,00' />
                    </div> 
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto26.png' nome='Tênis Nike Maculino' preco='R$ 60,00' />
                        <Pesquisa imagem='/images/produto27.png' nome='Gorro Nike Maculino' preco='R$ 260,00' />
                        <Pesquisa imagem='/images/produto28.png' nome='Tênis Fila Masculino' preco='R$ 50,00' />
                        <Pesquisa imagem='/images/produto29.png' nome='Tênis Adidas Masculino' preco='R$ 380,00' />
                        <Pesquisa imagem='/images/produto30.png' nome='Boné New Era Maculino' preco='R$ 299,00' />
                    </div> 
                </div>           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}