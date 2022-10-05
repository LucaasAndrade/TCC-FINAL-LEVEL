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
                        <Pesquisa imagem='/images/produto21.png' nome='Camiseta Street Feminino' preco='R$ 90,00' />
                        <Pesquisa imagem='/images/produto22.png' nome='Calça Street Feminino' preco='R$ 119,00' />
                        <Pesquisa imagem='/images/produto23.png' nome='Casaco New Era Feminino' preco='R$ 150,00' />
                        <Pesquisa imagem='/images/produto24.png' nome='Conjunto Street Feminino' preco='R$ 350,00' />
                        <Pesquisa imagem='/images/produto25.png' nome='Camiseta Nike Feminino' preco='R$ 100,00' />
                    </div> 
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto26.png' nome='Jaqueta Street Feminino' preco='R$ 260,00' />
                        <Pesquisa imagem='/images/produto27.png' nome='Calça Street Feminino' preco='R$ 160,00' />
                        <Pesquisa imagem='/images/produto28.png' nome='Camiseta Street Feminino' preco='R$ 90,00' />
                        <Pesquisa imagem='/images/produto29.png' nome='Shorts Street Feminino' preco='R$ 80,90' />
                        <Pesquisa imagem='/images/produto30.png' nome='Calça Street Feminino' preco='R$ 239,00' />
                    </div> 
                </div>           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}