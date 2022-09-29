import "./index.scss";

export default function Login() {
  return (
    <main className="page-user-login">
      <header>
        <div className="faixa-header">
          <div>
            <img src="/images/retan-branco.png" alt="retangulo" />
          </div>
          <img className="logo" src="/images/logoo.png" alt="logo" />
          <div>
            <button className="botao-painel">VOLTAR</button>
          </div>
        </div>
      </header>
      <section className="fundo-login">
        <div className="login">
          <div className="info-login">
          <h4>LOGIN</h4>
          <h6 className="p-informacao">Já é cliente Street Elegance?</h6>
          <div className="input">
            <label className="p-input">E-mail</label>
            <input type="text" placeholder="exemplo@exemplo.com"></input>
          </div>
          <div className="input">
            <label className="p-input">Senha</label>
            <input type="password" placeholder="*****"></input>
          </div>
          <button className="botao-entrar">ENTRAR</button>
          <div className="alinhar-ou">
            <p>------------------ ou ------------------</p>
          </div>
          <h5 className="criar-conta">CRIE UMA CONTA</h5>
          <h6 className="p-informacao">Já é cliente Street Elegance?</h6>
          <button className="botao-cadastrar">CADASTRE-SE</button>
          <p className="mensagem-erro"></p>
          </div>
        </div>
      </section>
    </main>
  );
}
