import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';





export default function Carrinho() {

    return (
        <main id='page-carrinho'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-carrinho'>
                <CardCarrinho imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='ADIDAS' preco='R$ 60,00' />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}