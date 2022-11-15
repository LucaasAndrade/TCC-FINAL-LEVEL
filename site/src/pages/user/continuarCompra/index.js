import './index.scss'
import CardFinalizarProduto from '../../../components/cardFinalizaProduto'
import LogoContinuarcompa from '../../../components/logoContinuarcompra'


import { useState, useEffect } from 'react'

import Storage from 'local-storage'
import { salvar } from '../../../api/Endereco'
import { useNavigate } from 'react-router-dom';
import ModalVerificado from '../../../components/modalVerificado'
import CodigoPromocional from '../../../components/codigoPromocional'


export default function ContinuarCompra() {
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [usuario, setUsuario] = useState({ id: 0, nome: '' });


    const navigate = useNavigate();

    function cancelarCompra() {
        navigate('/carrinho')
    }

    const [ exibir, setExibir] = useState(false)

    function exibirModal(){
        setExibir(true)
    }

    function fechar(){
        setExibir(false)
    }


    useEffect(() => {
        if (Storage('usuario-logado')) {
            const UsuarioLogado = Storage('usuario-logado');
            setUsuario({ id: UsuarioLogado.id, nome: UsuarioLogado.nome });
        }
    }, []);


    const CadastroEndereco = async _ => {
        try {
            const r = await salvar(usuario.id, cep, logradouro, bairro, cidade, estado, numero, complemento);
            alert('Endereço cadastrado com sucesso!');



        } catch (err) {
            alert(err.response.data.erro)
        }
    };




    return (
        <main className='page-continuar-compra'>
            <LogoContinuarcompa />

            <ModalVerificado exibir={exibir} fechar={fechar} />

            <section className='fundo-endereco'>

                <div className='fundo'>
                    <div>
                        <div className='principal-endereco-envio'>
                            <div className='f-pag'>
                                <p className='titulo'>Endereço de Envio</p>
                                <div className='todos-inputs'>
                                    <div>
                                        <input type="text" placeholder="Estado*" value={estado} onChange={e => setEstado(e.target.value)}></input>
                                        <input className="input-direita" type="text" placeholder="Cidade*" value={cidade} onChange={e => setCidade(e.target.value)}></input>
                                    </div>
                                    <div className='input'>
                                        <input type="text" id='input-complemento' placeholder="Complemento" value={complemento} onChange={e => setComplemento(e.target.value)}></input>
                                    </div>
                                    <div className='input'>
                                        <input type="text" placeholder="CEP*" value={cep} onChange={e => setCep(e.target.value)}></input>
                                        <input className="input-direita" type="text" placeholder="Bairro*" value={bairro} onChange={e => setBairro(e.target.value)}></input>
                                    </div>
                                    <div className="input">
                                        <input type="text" placeholder="Logradouro*" id="input-referencia" value={logradouro} onChange={e => setLogradouro(e.target.value)}></input>
                                        <input type="number" placeholder="Número*" id="input-numero" value={numero} onChange={e => setNumero(e.target.value)}></input>
                                    </div>
                                    <button className='botao-salvar' onClick={CadastroEndereco}>salvar Endereco</button>
                                </div>
                            </div>
                        </div>

                        <div className='fundo-pagamento'>
                            <div className='f-pag'>
                                <p className='titulo'>Forma de Pagamento</p>
                                <div className='div-check'>
                                    <div className='pagamento'>
                                        <div className="checkbox">
                                            <input type="checkbox"></input>
                                            <img className='img-pagamento' src='/images/cartao-azul.png'></img>
                                            <p className="chek">Cartão de Crédito</p>
                                        </div>
                                        <div className="checkbox-dois">
                                            <input type="checkbox"></input>
                                            <img className='img-pagamento' src='/images/cartao-amarelo.png'></img>
                                            <p className="chek">Cartão de Débito</p>
                                        </div>
                                    </div>
                                    <div className='pagamento'>
                                        <div className="checkbox">
                                            <input type="checkbox"></input>
                                            <img className='img-pagamento' src='/images/boleto.png'></img>
                                            <p className="chek">Boleto</p>
                                        </div>
                                        <div className="checkbox-pix">
                                            <input type="checkbox"></input>
                                            <img className='img-pagamento' src='/images/pix.png'></img>
                                            <p className="chek">PIX</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='endereco'>
                                    <div>
                                        <p className='titulo'>Informações do Cartão</p>
                                        <div className='inputs-titulo'>
                                            <div>
                                                <input type="text" placeholder="Número do cartão*"></input>
                                                <select>
                                                    <option disabled hidden selected> Parcelas</option>
                                                    <option value={1}>01x à Vista</option>
                                                    <option value={1}>01x sem Juros</option>
                                                    <option value={2}>02x sem Juros</option>
                                                    <option value={3}>03x sem Juros</option>
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

                    <div>
                        <CardFinalizarProduto botao='finalizar compra' />
                        <div>
                            <CodigoPromocional />
                        </div>
                        <div className='finaliza'>
                            <p>---------- ou ----------</p>
                            <button className="botao-cancelar" onClick={cancelarCompra} > cancelar compra </button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}