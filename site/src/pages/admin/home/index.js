import { useNavigate } from 'react-router-dom'
import './index.scss'





export default function Home() {

    const navigate = useNavigate('');

    function Home(){
        navigate('/home')
    }

    function Adicionar(){
        navigate ("/admin/cadastrarproduto")
    }


    function ListarPedidos() {
        navigate ("/admin/buscar/pedidos")
    }

    function ListarProdutos() {
        navigate ("/admin/buscar/produtos")
    }

    function Chat() {
        navigate ("/chat")
    }

    function Cupons() {
        navigate ("/admin/adicionar/cupom")
    }

    function HistoricoPedidos() {
        navigate ("/historico/pedidos")
    }

    return (
        <main className='page-home-admin'>
            <header>
                <div className="faixa-header">
                    <img className='logo' onClick={Home} src="/images/logoo.png" alt="logo"></img>
                </div>
            </header>

            <section className='fundo-home'>
                <h3 className='bem-vindo'>OLÁ {/*<@USUÁRIO>*/} @USUÁRIO, BEM VINDO AO PAINEL ADMINISTRATIVO</h3>
                <div className='fundo'>
                    <div className='botoes-gerenciar'>
                        <div className='botoes'>
                            <div>
                                <div>
                                    <button className='botao'onClick={Adicionar}>ADICIONAR PRODUTOS</button>
                                </div>
                                <div>
                                    <button className='botao'onClick={ListarPedidos}>LISTAR PEDIDOS</button>
                                </div>
                                <div>
                                    <button className='botao'onClick={ListarProdutos}>LISTAR PRODUTOS</button>
                                </div>
                                <div>
                                    <button className='botao'>CHAT DE ATENDIMENTO</button>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <button className='botao-dois'>HISTÓRICO DE CUPONS</button>
                                </div>
                                <div>
                                    <button className='botao-dois' onClick={HistoricoPedidos}>HISTÓRICO DE PEDIDOS</button>
                                </div>
                                <div>
                                    <button className='botao-dois' onClick={Cupons}>ADICIONAR CUPONS</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </main>
    )
}