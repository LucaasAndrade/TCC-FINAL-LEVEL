import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import CardCarrinho from '../../../components/CardCarrinho';
import FinalizarCompra from '../../../components/finalizarCompra';
import CodigoPromocional from '../../../components/codigoPromocional';





export default function Carrinho() {

    return (
        <main className='page-carrinho'>
            <section>
                <Cabecalho />
            </section>
            <section>
                <CardCarrinho imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='ADIDAS' preco='R$ 60,00' />
                <CardCarrinho imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='ADIDAS' preco='R$ 60,00' />
                <FinalizarCompra />
                <CodigoPromocional />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}