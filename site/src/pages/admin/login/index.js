import './index.scss';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { loginAdm } from '../../../api/loginAdm';


export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate('');


  function cancelarClick() {
    navigate("/")
  }

  async function loginClick() {
    try {
      const resp = await loginAdm(email, senha)

      navigate("/admin/homeamdin")
    }
    catch (err) {
      if (err.response.status === 401) {
        setErro(err.response.data.erro);
      }
    }
  }

  return (
    <main className="page-login">
      <ToastContainer />

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
              <h4>LOGIN</h4>
              <div className="input">
                <label className="p-input">E-mail</label>
                <input type="text" placeholder='exemplo@exemplo.com' value={email} onChange={e => setEmail(e.target.value)}></input>
              </div>

              <div className="input">
                <label className="p-input">Senha</label>
                <input type="password" placeholder='*****' value={senha} onChange={e => setSenha(e.target.value)}></input>
              </div>

              <button className="botao-entrar" onClick={loginClick}>ENTRAR</button>
              <div className="alinhar-ou">
                <p>------------------ ou ------------------</p>
              </div>
              <button className="botao-cancelar" onClick={cancelarClick}>CANCELAR</button>
              <p className="mensagem-erro"> {erro} </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
