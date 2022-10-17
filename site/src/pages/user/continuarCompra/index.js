import './index.scss'




export default function ContinuarCompra() {
    return (
        <main className='page-continuar-compra'>
            <header>
                <div className="faixa-header">
                    <img className="logo" src="/images/logoo.png" alt="logo" />
                </div>
            </header>
            <section>
                {/*Parte esquerda*/}
                <div>
                    <div className='fundo-endereco'>
                        <div>
                            <p className='p-endereco'>Endereço de Envio</p>
                            <div>
                                <div>
                                    <input type="text" placeholder="Estado*"></input>
                                    <input className="input-direita" type="text" placeholder="Cidade*"></input>
                                </div>
                                <div className='input'>
                                    <input type="text" id='input-complemento' placeholder="Complemento"></input>
                                </div>
                                <div className='input'>
                                    <input type="text" placeholder="CEP*"></input>
                                    <input className="input-direita" type="text" placeholder="Bairro*"></input>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="Logradouro*" id="input-referencia"></input>
                                    <input type="number" placeholder="Número*" id="input-numero"></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='fundo-pagamento'>
                        <div>
                            <p>Forma de Pagamento</p>
                            <div>
                                <div className='pagamento'>
                                    <div className="checkbox">
                                        <input type="checkbox"></input>
                                        <img src='/images/cartao-azul.png'></img>
                                        <p className="chek">Cartão de Crédito</p>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox"></input>
                                        <img src='/images/cartao-amarelo.png'></img>
                                        <p className="chek">DESTAQUE</p>
                                    </div>
                                </div>
                                <div className='pagamento'>
                                    <div className="checkbox">
                                        <input type="checkbox"></input>
                                        <img src='/images/boleto.png'></img>
                                        <p className="chek">Boleto</p>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox"></input>
                                        <img src='/images/pix.png'></img>
                                        <p className="chek">PIX</p>
                                    </div>
                                </div>
                            </div>



                            <div className='fundo-endereco'>
                                <div>
                                    <p className='p-endereco'>Informações do Cartão</p>
                                    <div>
                                        <div>
                                            <input type="text" placeholder="Número do cartão*"></input>
                                            <select>
                                                <option value="??" selected disabled hidden> Parcelas</option>
                                                <option value="??"> ?? </option>
                                                <option value="??"> ?? </option>
                                                <option value="??"> ?? </option>
                                                <option value="??"> ?? </option>
                                                <option value="??"> ?? </option>
                                            </select>
                                        </div>
                                        <div className="input">
                                            <input type="date"></input>
                                            <input className="input-direita" type="text" placeholder="CVV*"></input>
                                        </div>
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