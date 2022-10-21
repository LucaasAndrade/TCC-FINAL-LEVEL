import './index.scss'
import CardFinalizarProduto from '../../../components/cardFinalizaProduto'
import LogoContinuarcompa from '../../../components/logoContinuarcompra'


export default function ContinuarCompra() {
    return (
        <main className='page-continuar-compra'>
            <LogoContinuarcompa/>
            
            <section className='fundo-endereco'>
                
                <div className='Principal-Endereco-Envio'>
                      <div>
            
                            <p className='titulo'>Endereço de Envio</p>
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
                            <p className='titulo'>Forma de Pagamento</p>
                            <div>
                                <div className='pagamento'>
                                    <div className="checkbox">
                                        <input type="checkbox"></input>
                                        <img src='/images/cartao-azul.png'></img>
                                        <p className="chek">Cartão de Crédito</p>
                                    </div>
                                    <div className="checkbox-dois">
                                        <input type="checkbox"></input>
                                        <img src='/images/cartao-amarelo.png'></img>
                                        <p className="chek">Cartão de Débito</p>
                                    </div>
                                </div>
                                <div className='pagamento'>
                                    <div className="checkbox">
                                        <input type="checkbox"></input>
                                        <img src='/images/boleto.png'></img>
                                        <p className="chek">Boleto</p>
                                    </div>
                                    <div className="checkbox-dois">
                                        <input type="checkbox"></input>
                                        <img src='/images/pix.png'></img>
                                        <p className="chek">PIX</p>
                                    </div>
                                </div>
                            </div>

                            <div className='fundo-endereco'>
                            </div>
                                <div >
                                    <p className='titulo'>Informações do Cartão</p>
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
                        <CardFinalizarProduto/>
                
            </section>
        </main>
    )
}