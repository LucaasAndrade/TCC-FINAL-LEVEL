import './index.scss';





export default function Login() {
  return (
    <main className="page-login">
      <section className="fundo-tela-login">
        <div className="bem-vindo-login">
          <h2 className="bem-vindo-p">
            BEM-VINDO(a), você está prestes a entrar na área de administradores
          </h2>
        </div>
        <div className="fundo-page-login">
          <div className="fundo-imagem">
            <img src="/images/image-login.png" alt="imagem-login"></img>
          </div>
          <div className="fundo-login">
            <div className="info-login">
              <p>LOGIN</p>
              <div className="input">
                <label className="p-input">E-mail</label>
                <input type="text" id="E-mail"></input>
              </div>

              <div className="input">
                <label className="p-input">Senha</label>
                <input type="password" id="Senha"></input>

                <div className="olho">
                  
                </div>
              </div>

              <button className="botao-entrar">ENTRAR</button>
              <div className="alinhar-linha">
                <p>------------------ ou ------------------</p>
              </div>
              <button className="botao-cancelar">CANCELAR</button>
              <p className="mensagem-erro">MENSAGEM DE ERRO</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
