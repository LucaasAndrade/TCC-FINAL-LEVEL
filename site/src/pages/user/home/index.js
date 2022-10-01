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
                <div className='categorias'>
                    <div>
                        <button className='p-categoria'>COMPRE POR CATEGORIA</button>
                    </div>
                    <div className='img-categoria'>
                        <img src='/images/feminino.png' alt='img-feminino' />
                        <img className='imagem-cate' src='/images/masculino1.png' alt='img-masculino' />
                        <img className='imagem-cate' src='/images/infantil.png' alt='img-infantil' />
                    </div>
                </div>
            </section>
            <section className='fundo-acessorios'>
                <div className='acessorios-info'>
                    <button className='botao-acessorios'>ACESSÓRIOS</button>
                    <h5 className='p-ver-mais'>Ver mais >> </h5> 
                </div>
                <div></div>
            </section>
            <section className='fundo-marcas'>
                <div className='div-marcas'>
                    <p className='p-marcas'>MARCAS</p>
                </div>
            </section>
        </main>
    )
}