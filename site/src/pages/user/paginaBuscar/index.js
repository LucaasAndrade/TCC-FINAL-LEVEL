import './index.scss'

import Cabecalho from '../../../components/header';
import Footer from '../../../components/footer';
import Pesquisa from '../../../components/pesquisar';







export default function PaginaBuscar() {
    
 
    

    return (
        <main className='pagina-buscar' >
            <section>
                <Cabecalho />
            </section>
            <section className='fundo-cartao'>
                <div className='div-cartao'>
                    {/*<div className='produtos'>
                    {produtos.map(item =>
                            <Pesquisa item={item} />
                            )}
                    </div>*/} 
                </div>           
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}