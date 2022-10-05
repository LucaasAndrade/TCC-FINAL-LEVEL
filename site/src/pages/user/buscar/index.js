import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';





export default function Buscar() {

    return (
        <main id='page-buscar'>
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    <div className='produtos'>
                        <Pesquisa imagem='/images/produto01.png' nome='Boné Lacoste Masculino' preco='R$ 60,00' />
                        <Pesquisa imagem='/images/produto06.png' nome='Tênis Nike Masculino' preco='R$ 270,00' />
                    </div> 
                    <div className='produtos'>
                       
                    </div> 
                </div>           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}