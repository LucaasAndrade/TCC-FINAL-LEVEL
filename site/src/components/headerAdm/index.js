import "./index.scss";
import "../../common/common.scss";

import { useNavigate } from "react-router-dom";

export default function Cabecalho() {

  const navigate = useNavigate("");

  function HistoricoPedidos() {
    navigate("/historico/pedidos");
  }

  return (

    <header className='componente-header'>
      <div>
        <div className='header'>
          <img className='logo' src='/images/logoo.png' alt='logo' onClick={() => navigate('/')} />
          <div className='topicos-p'>
            <p className='topicoo' onClick={() => navigate('/admin/cadastrarproduto')} >ADICIONAR PRODUTOS</p>
            <p className='topico' onClick={() => navigate('/admin/buscar/pedidos')}>LISTAR PEDIDOS</p>
            <p className='topico' onClick={() => navigate('/admin/buscar/produtos')}> LISTAR PRODUTOS</p>
            <p className='topico' onClick={() => navigate('/admin/adicionar/cupom')}>CUPONS</p>
          </div>
          <div>
            <button className="botao-painel" onClick={() => navigate('/admin/home')}>
              PAINEL
            </button>
          </div>

        </div>
      </div>
    </header>

  )
}
