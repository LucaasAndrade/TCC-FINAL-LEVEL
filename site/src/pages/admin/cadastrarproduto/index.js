import './index.scss'




export default function Cadastrarproduto() {

    return(
        <main className='page-cadastro'>

            <header>

                <div className='faixa-header'>
                    <img src='/images/logo.png' alt='logo'></img>
                    <div className='topicos'>
                        <p >ADICIONAR PRODUTO</p>
                        <p className='p-topicos'>LISTAR PEDIDOS</p>
                        <p className='p-topicos'>LISTAR PRODUTOS</p>
                        <p className='p-topicos'>CHAT</p>
                        <p className='p-topicos'>CUPONS</p>
                        <p className='p-topicos'>HISTÓRICO</p>
                    </div>
                    <div>
                        <button className='botao-painel'>PAINEL</button>
                    </div>
                </div>

            </header>

            <section>

                <div>
                    <div>
                        <div>
                            <div className='adicionar-imagens'>
                                <input type='image' className='campo-imagem' src='/images/adicionar-imagem.png' alt='adicionar-imagem' />
                                <div className='adicionar-imagens-dois'>
                                    <div>
                                        <input type='image' className='campo-imagem-dois' src='/images/adicionar2.png' alt='adicionar-imagem' />
                                        <input type='image' className='imagem-dois' src='/images/adicionar2.png' alt='adicionar-imagem' />
                                    </div> 
                                    <div>
                                        <input type='image' className='campo-imagem-dois' src='/images/adicionar2.png' alt='adicionar-imagem' />
                                        <input type='image' className='imagem-dois' src='/images/adicionar2.png' alt='adicionar-imagem' />
                                    </div> 
                                </div>
                            </div>
                            <div>
                                <p>INFORMAÇÕES DO PRODUTO</p>
                                <textarea></textarea>
                            </div>
                            <div>
                                <div>
                                    <p>NOME DO PRODUTO</p>
                                    <input></input>
                                </div>
                                <div>
                                    <p>VALOR</p>
                                    <input></input>
                                </div>
                                <div>
                                    <p>MARCA</p>
                                    <input></input>
                                </div>
                                <div>
                                    <div>
                                        <p>CATEGORIA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}