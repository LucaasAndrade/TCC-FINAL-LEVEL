import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Destacar from '../../../components/destacar';
import CardMeusPedidos from '../../../components/cardMeusPedidos';





export default function Destaques() {

    return (
        <main className='page-destaques'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                        <Destacar imagem='/images/produto31.png' numero= '212' nome='Moletom Street Masculino' preco='R$ 60,00' />
                        <Destacar imagem='/images/produto32.png' numero='6' nome='Tênis Adidas Masculino' preco='R$ 60,00' />
                    </div>  
                </div>           
            </section>
            {/*Tela de meus pedidos -  teste*/}
            <section>
                <CardMeusPedidos />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}