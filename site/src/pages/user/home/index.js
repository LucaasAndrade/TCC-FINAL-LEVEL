import './index.scss'

import Cabecalho from '../../../components/header'




export default function Home() {

    return (
        <main id='page-lading'>
            <header>
                <Cabecalho />
            </header>
            <section>
                <div>
                    <img className='imagem-inicio' src='/images/imagem-inicio.png' alt='imagem-principal' />
                </div>
                <div>
                    <div>
                        <div className='p-categoria'>COMPRE POR CATEGORIA</div>
                    </div>
                    <div className='img-categoria'>
                        <img src='/images/feminino.png' alt='img-feminino' />
                        <img src='/images/masculino1.png' alt='img-masculino' />
                        <img src='/images/infantil.png' alt='img-infantil' />
                    </div>
                </div>
            </section>
        </main>
    )
}