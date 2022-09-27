import  "./index.scss";

export default function loginUsuario(){
    return(
    <main className="page-login">

    <div className="Faixa">
   <img src="/images/logo.png" alt="logo-adiciona"></img>
   </div>
   <div>
   <button  className="botao-voltar">VOLTAR</button>
   </div>
    
    <div className="quadrado-login">
        <p>LOGIN</p>
        <h2>Já é cliente Street Elegance?</h2>

        <div className="input">
                <label className="p-input">E-mail</label>
                <input type="text" id="E-mail"></input>
              </div>

              <div className="input">
                <label className="p-input">Senha</label>
                <input type="password" id="Senha"></input>
                </div>

                

       
<div>
<button className="botao-entrar">ENTRAR</button>
              <div className="alinhar-linha">
              <p>------------------ ou ------------------</p>
              </div>

        <div className="textos">
            <p className="t1">Crie uma conta</p>
            <h1 className="t2">Ainda não tem conta na Street Elegance?</h1>
        </div>

        <button className="botao-cancelar">CADASTRE-SE</button>
              <p className="mensagem-erro">MENSAGEM DE ERRO</p>
</div>
    
    </div>
    
    
    </main>

    )
}