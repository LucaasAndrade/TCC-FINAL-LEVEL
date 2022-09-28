import './index.scss'





export default function Login() {

    return (
        <main>
            <header>
                <div className="faixa-header">
                    <div>
                        <img src='/images/retan-branco.png' alt='retangulo'></img>
                    </div>
                        <img className='logo' src="/images/logo.png" alt="logo"></img>
                    <div>
                        <button className="botao-painel">VOLTAR</button>
                    </div>
                </div>
            </header>

            <section className='fundo-login'>
                <div>
                    <div>
                        <p>LOGIN</p>
                        <h4>Já é cliente Street Elegance?</h4>
                        <div>
                            <label></label>
                            <input></input>
                            <input type="text" id="E-mail" placeholder='exemplo@exemplo.com'></input>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}