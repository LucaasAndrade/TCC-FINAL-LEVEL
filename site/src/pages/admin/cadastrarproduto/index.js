import './index.scss'




export default function Cadastrarproduto() {

    return (
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

                <div className='fundo'>
                    <div className='fundo-cadastrar'>
                        <div className='elementos-esquerda'>
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
                            <div className='textarea'>
                                <p>INFORMAÇÕES DO PRODUTO</p>
                                <textarea id="story" name="story"
                                    rows="7" cols="46">
                                </textarea>
                            </div>
                        </div>
                        <div className='campo-informacao'>
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
                            </div>
                            <div>
                                <div className='cate-tama'>
                                    <div>
                                        <p>CATEGORIA</p>
                                    </div>
                                    <div>
                                        <p>TAMANHO</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>DISPONÍVEL</p>
                                        <input type='checkbox' checked=''></input>
                                    </div>
                                    <div>
                                        <p>DESTAQUE</p>
                                        <input type='checkbox' checked=''></input>
                                    </div>
                                </div>
                            </div>
                            <div className='botoes'>
                                <div>
                                    <button className='botao-excluir'>EXCLUIR PRODUTO</button>
                                </div>
                                <div>
                                    <button className='botao-c-d'>CADASTRA PRODUTO</button>
                                </div>
                                <div>
                                    <button className='botao-c-d'>SALVAR ALTERAÇÃO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}