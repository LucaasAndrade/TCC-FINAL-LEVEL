import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';
import FinalizarCompra from '../../../components/finalizarCompra';





export default function Carrinho() {

    return (
        <main id='page-carrinho'>
            <section>
                <Cabecalho />
            </section>
            <section>
                <CardCarrinho imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='ADIDAS' preco='R$ 60,00' />
                <CardCarrinho imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='ADIDAS' preco='R$ 60,00' />
                <FinalizarCompra />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}