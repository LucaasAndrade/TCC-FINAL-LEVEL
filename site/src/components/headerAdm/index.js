import './index.scss';
import '../../common/common.scss'

import { useNavigate } from 'react-router-dom';




export default function Cabecalho() {

    const navigate = useNavigate('');
    
    function HomeAdm(){
        navigate ("/admin/home")
    }

    function Adicionar(){
        navigate ("/adicionarprodutos")
    }

    function AcessoriosPage(){
        navigate ("/acessorios")
    }

    function ListarPedidos() {
        navigate ("/listarpedidos")
    }

    function ListarProdutos() {
        navigate ("/listarprodutos")
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
                <img className='logo' src='/images/logoo.png' alt='logo' />
                <div className='topicos'>
                    <p>ADICIONAR PRODUTOS</p>
                    <p className='p-topicos' >LISTAR PEDIDOS</p>
                    <p className='p-topicos' >LISTAR PRODUTOS</p>
                    <p className='p-topicos' >CHAT</p>
                    <p className='p-topicos' >CUPONS</p>
                    <p className='p-topicos' >HISTÓRICO</p>
                </div>
                <div>
                    <button className="botao-painel" onClick={HomeAdm}>PAINEL</button>
                </div>
            </div>
            </div>
        </header>
    )
}