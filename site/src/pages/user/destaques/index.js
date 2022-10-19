import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Destacar from '../../../components/destacar';
import CardMeusPedidos from '../../../components/cardMeusPedidos';
import DadosPedidos from '../../../components/dadosCardPedidos';





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
                <DadosPedidos data='23/11/2022' preco='R$ 409,90' situacao='entregue' />
                <CardMeusPedidos imagem='/images/produto31.png' nome='Moletom Street Masculino' marca='Street' tamanho='G' quantidade='1' />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}