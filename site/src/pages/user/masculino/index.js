import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';





export default function Masculino() {

    return (
        <main id='page-masculino'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto11.png' nome='Bermuda Nike Masculino' preco='R$ 99,90' />
                        <Pesquisa imagem='/images/produto12.png' nome='Calça Street Masculino' preco='R$ 250,00' />
                        <Pesquisa imagem='/images/produto13.png' nome='Moletom Gola alta Masculino' preco='R$ 220,00' />
                        <Pesquisa imagem='/images/produto14.png' nome='Moletom Puma Masculino' preco='R$ 299,00' />
                        <Pesquisa imagem='/images/produto15.png' nome='Calça Street Masculino' preco='R$ 250,00' />
                    </div> 
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto16.png' nome='Calça New Balance Masculino' preco='R$ 199,00' />
                        <Pesquisa imagem='/images/produto17.png' nome='Camiseta Street Masculino' preco='R$ 140,00' />
                        <Pesquisa imagem='/images/produto18.png' nome='Bermuda Street Masculino' preco='R$ 119,00' />
                        <Pesquisa imagem='/images/produto19.png' nome='Camiseta Street Masculino' preco='R$ 140,90' />
                        <Pesquisa imagem='/images/produto20.png' nome='Bermuda Street Masculino' preco='R$ 119,00' />
                    </div> 
                </div>           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}