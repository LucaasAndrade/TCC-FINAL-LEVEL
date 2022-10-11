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
      <section className="fundo-cadastro">
        <div className="cadastro">
          <div>
            <div>
              <input type="text" placeholder="Nome*"></input>
              <input className="input-direita" type="text" placeholder="Nome*"></input>
            </div>
            <div className="input">
              <input type="date" placeholder="Dia*"></input>
              <input className="input-direita" type="text" placeholder="CPF*"></input>
            </div>
            <div className="input">
              <input type="tel" placeholder="Telefone*"></input>
              <input className="input-direita" type="tel" placeholder="Outro telefone"></input>
            </div>
            <div className="input">
              <input type="text" placeholder="Seu CEP*"></input>
              <input className="input-direita" type="text" placeholder="Nome da rua*"></input>
            </div>
            <div className="input">
              <input type="text" placeholder="Estado*"></input>
              <input className="input-direita" type="text" placeholder="Cidade*"></input>
            </div>
            <div className="input">
              <input type="number" placeholder="Número*" id="input-numero"></input>
              <input type="text" placeholder="Ponto de referência" id="input-referencia"></input>
            </div>
          </div>
        </div>

        <div className="fundo-login">
        <div className="login">
          <div className="info-login">
          <h4>Crie uma conta</h4>
          <h6 className="p-informacao">Ainda não tem conta na Street Elegance?</h6>
          <div className='inputs'>
          <div className="input-login">
            <label className="p-input">E-mail</label>
            <input type="text" placeholder="exemplo@exemplo.com"></input>
          </div>
          <div className="input-login">
            <label className="p-input">Senha</label>
            <input type="password" placeholder="*****"></input>
          </div>
          </div>
          <button className="botao-cadastrar">CADASTRE-SE</button>
          <p className="mensagem-erro"></p>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
