import './index.scss';
import '../../common/common.scss'

import { useNavigate } from 'react-router-dom';




export default function Cabecalho() {

    const navigate = useNavigate('');
    
    function Home(){
        navigate('/home')
    }

    function HomeAdm(){
        navigate ("/admin/home")
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
        navigate ("/cupons")
    }

    function Historico() {
        navigate ("/historico")
    }


    return (
        <header id='componente-header-adm'>
            <div>
            <div className='faixa-header'>
                <img className='logo' onClick={Home} src='/images/logoo.png' alt='logo' />
                <div className='topicos-p'>
                    <p className='topicoo' onClick={Adicionar}>ADICIONAR PRODUTOS</p>
                    <p className='topico' onClick={ListarPedidos}>LISTAR PEDIDOS</p>
                    <p className='topico' onClick={ListarProdutos}>LISTAR PRODUTOS</p>
                    <p className='topico' >CHAT</p>
                    <p className='topico' >CUPONS</p>
                    <div className='filtro-historico'>
                        <p className='h-topico' >HISTÓRICO</p>
                        <select>
                            <option value="" selected disabled hidden></option>
                            <option value="Disponíveis"> Cupons </option>
                            <option value="Não Disponíveis"> Pedidos </option>
                        </select>
                    </div>
                </div>
                <div>
                    <button className="botao-painel" onClick={HomeAdm}>PAINEL</button>
                </div>
            </div>
            </div>
        </header>
    )
}