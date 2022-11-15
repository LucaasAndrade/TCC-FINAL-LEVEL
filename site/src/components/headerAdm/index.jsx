import "./index.scss";
import "../../common/common.scss";

import { useNavigate } from "react-router-dom";

export default function Cabecalho() {
  const navigate = useNavigate("");

  function Home() {
    navigate("/");
  }

  function HomeAdm() {
    navigate("/admin/home");
  }

  function Adicionar() {
    navigate("/admin/cadastrarproduto");
  }

  function ListarPedidos() {
    navigate("/admin/buscar/pedidos");
  }

  function ListarProdutos() {
    navigate("/admin/buscar/produtos");
  }

  function Chat() {
    navigate("/chat");
  }

  function Cupons() {
    navigate("/admin/adicionar/cupom");
  }

  function HistoricoPedidos() {
    navigate("/historico/pedidos");
  }

  return (
    <header className="componente-header-adm">
      <div>
        <div className="header">
          <img
            className="logo"
            src="/images/logoo.png"
            alt="logo"
            onClick={Home}
          />
          <div className="topicos-p">
            <p className="topicoo" onClick={Adicionar}>
              ADICIONAR PRODUTOS
            </p>
            <p className="topico" onClick={ListarPedidos}>
              LISTAR PEDIDOS
            </p>
            <p className="topico" onClick={ListarProdutos}>
              LISTAR PRODUTOS
            </p>
            <p className="topico">CHAT</p>
            <p className="topico" onClick={Cupons}>
              CUPONS
            </p>
          </div>
          <div>
            <button className="botao-painel" onClick={HomeAdm}>
              PAINEL
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
