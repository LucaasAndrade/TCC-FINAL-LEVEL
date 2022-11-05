import './index.scss'

import HeaderAdm from  '../../../components/headerAdm'

export default function AdicionarCupom() {
    return(
        <main className='page-adicionar-cupom'>
            <header>
                <HeaderAdm />
            </header>
            <section>
                <div>
                    <h1></h1>
                    <div>
                        <input type='text' placeholder='Cupom*'></input>
                        <p>O cupom  é a chave do seu desconto. Ele que deve ser divulgado e inserido durante o pagamento  do pedido. Ex:MEUCUPOM</p>
                    </div>
                    <div>                        
                        <p>Valores</p>                       
                        <div>
                            <input type='text' placeholder='Porcentagem*'></input>
                            <input type='number' placeholder='Valor*'></input>
                            <input type='number' placeholder='Valor Mínimo*'></input>
                        </div>
                        <p>Configurações</p>                       
                        <div>
                            <input type='text' placeholder='Data Inicial*'></input>
                            <input type='number' placeholder='Data Final*'></input>
                            <select>
                                <option disabled hidden selected> Forma de Pagamento</option>
                                <option value='1'>Débito</option>
                                <option value='2'>Crédito</option>
                                <option value='3'>Boleto</option>
                                <option value='4'>PIX/</option>
                            </select>
                        </div>
                        <div>
                            <p>Quantidades</p>
                            <div>
                                <div className="textarea">
                                    <p>INFORMAÇÕES DO PRODUTO</p>
                                    <textarea className="descricao" name="story" rows="7" cols="46"></textarea>
                                </div>
                                <div>
                                    <input type='text' placeholder='Limite de usos*'></input>
                                    <input type='text' placeholder='Limite por cliente*'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </main>
    )
}