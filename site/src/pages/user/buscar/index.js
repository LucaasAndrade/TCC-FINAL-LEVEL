import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisar from '../../../components/pesquisar';





export default function Buscar() {

    return (
        <main className='page-buscar'>
            <section>
                <Cabecalho />
            </section>
            <section>
                <Pesquisar />           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}