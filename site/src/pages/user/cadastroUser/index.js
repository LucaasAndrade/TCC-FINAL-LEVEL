import "./index.scss";

import { useNavigate } from "react-router-dom";

import Cabecalho from "../../../components/header";
import Footer from "../../../components/footer";
import CarroselDestaques from "../../../components/carrosel";
import CarroselMarcas from "../../../components/carroselmarcas";
import AcessoriosHome from "../../../components/acessoriosHome";

export default function CadastroUser() {
  const navigate = useNavigate("");

  function Home() {
    navigate("/home");
  }

  return (
    <main id="page-user-cadastro">
      <header>
        <div className="faixa-header">
          <div>
            <img src="/images/retan-branco.png" alt="retangulo" />
          </div>
          <img className="logo" src="/images/logoo.png" alt="logo" />
          <div>
            <button className="botao-painel" onClick={Home}>
              VOLTAR
            </button>
          </div>
        </div>
      </header>
    </main>
  );
}
