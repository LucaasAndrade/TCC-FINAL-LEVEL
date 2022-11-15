import "./index.scss";

import Header from "../../../components/logoContinuarcompra";

import { useNavigate } from "react-router-dom";

export default function CentralAtendimento() {

    const Navigate = useNavigate('')

    function Home() {
        Navigate('/')
    }

  return (
    <main className="page-atendimento">
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
