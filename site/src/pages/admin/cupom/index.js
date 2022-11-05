import './index.scss'

import HeaderAdm from  '../../../components/headerAdm'

export default function AdicionarCupom() {
    return(
        <main className='page-adicionar-cupom'>
            <header>
                <HeaderAdm />
            </header>
            <section className='fundo-informacoes'>
                <div className='div-informacoes'>
                    <h1>Cadastrar Cupom</h1>
                    <div>
                        <input className='input-cupom' type='text' placeholder='Cupom*'></input>
                        <p className='p-cupom'>O cupom  é a chave do seu desconto. Ele que deve ser divulgado e inserido durante o pagamento  do pedido. Ex:MEUCUPOM</p>
                    </div>
                    <div className='div-informacoes'>                        
                        <p>Valores</p>                       
                        <div>
                            <input className='input-info' type='number' placeholder='Porcentagem*'></input>
                            <input className='input-info' type='number' placeholder='Valor*'></input>
                            <input className='input-info' type='number' placeholder='Valor Mínimo*'></input>
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
                                <option value='4'>PIX</option>
                            </select>
                        </div>
                        <div className='cupom-quant'>                           
                            <div className="textarea">
                                <p>Quantidades</p>
                                <textarea className="descricao" name="story" rows="7" cols="46" placeholder='Descricão*'></textarea>
                            </div>
                            <div className='cupom-info-quant'>
                                <input type='text' placeholder='Limite de usos*'></input>
                                <input type='text' placeholder='Limite por cliente*'></input>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section> 
        </main>
    )
}