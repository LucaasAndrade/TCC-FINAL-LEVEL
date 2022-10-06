import './index.scss'





export default function Home() {
    return (
        <main className='page-home-admin'>
            <header>
                <div className="faixa-header">
                        <img className='logo' src="/images/logoo.png" alt="logo"></img>
                </div>
            </header>

            <section className='fundo-home'>
                <h3 className='bem-vindo'>OLÁ {/*<@USUÁRIO>*/} @USUÁRIO, BEM VINDO AO PAINEL ADMINISTRATIVO</h3>
                <div className='fundo'>
                    <div className='botoes-gerenciar'>
                        <div className='botoes'>
                            <div>
                                <div>
                                    <button className='botao'>ADICIONAR PRODUTOS</button>
                                </div>
                                <div>
                                    <button className='botao'>REMOVER PRODUTOS</button>
                                </div>
                                <div>
                                    <button className='botao'>LISTAR PRODUTOS</button>
                                </div>
                                <div>
                                    <button className='botao'>CHAT DE ATENDIMENTO</button>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <button className='botao-dois'>ENCOMENDAS</button>
                                </div>
                                <div>
                                    <button className='botao-dois'>HISTÓRICO DE ENCOMENDAS</button>
                                </div>
                                <div>
                                    <button className='botao-dois'>GERENCIAR CUPONS</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </main>
    )
}