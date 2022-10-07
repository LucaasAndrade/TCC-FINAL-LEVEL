import "./index.scss";

import { useNavigate } from "react-router-dom";
import storage from 'local-storage';

import LoadingBar from 'react-top-loading-bar';
import { useState,useEffect, useRef  } from "react";
import {loginUsua} from '../../../api/loginUsua';



export default function Login() {

  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [erro,setErro] = useState('');
  const [carregando,setCarregando] = useState(false);

  const navigate = useNavigate('');
  const ref = useRef();

  useEffect(()=>{
    storage.remove('usuario-logado');
}, []);

useEffect(()=>{
  if(storage('usuario-logado'));
      navigate('/login')
}, []);
  

  function Cadastrar(){
    navigate ("/Cadastrar")
  }

  function Home(){
    navigate ("/home")
  }

  const loginClick= async () =>{
    ref.current.continuousStart();
    setCarregando(true);




    try{
      const resp = await loginUsua(email,senha)
      storage('usuario-logado', resp);
               setTimeout(() =>{
                navigate ("/home")
               }, 3000);
    }
    catch (err) {
      ref.current.complete();
      setCarregando(false);

      if(err.response.status ===401){
        setErro(err.response.data.erro);
      }
    }

  }

  return (
    <main className="page-user-login">
      <LoadingBar color='#987F5B' ref={ref} />
      <header>
        <div className="faixa-header">
          <div>
            <img src="/images/retan-branco.png" alt="retangulo" />
          </div>
          <img className="logo" src="/images/logoo.png" alt="logo" />
          <div>
            <button className="botao-painel" onClick={Home}>VOLTAR</button>
          </div>
        </div>
      </header>
      <section className="fundo-login">
        <div className="login">
          <div className="info-login">
          <h4>LOGIN</h4>
          <h6 className="p-informacao">Já é cliente Street Elegance?</h6>
          <div className='inputs'>
          <div className="input">
            <label className="p-input">E-mail</label>
            <input type="text" placeholder="exemplo@exemplo.com" value={email}onChange={e =>setEmail(e.target.value)}></input>
          </div>
          <div className="input">
            <label className="p-input">Senha</label>
            <input type="password" placeholder="*****" value={senha} onChange= {e => setSenha(e.target.value)}></input>
          </div>
          </div>
          <button className="botao-entrar" onClick={loginClick} disabled={carregando}>ENTRAR</button>
          <div className="alinhar-ou">
            <p>------------------ ou ------------------</p>
          </div>
          <h5 className="criar-conta">Crie uma conta</h5>
          <h6 className="p-informacao">Já é cliente Street Elegance?</h6>
          <button className="botao-cadastrar" onClick={Cadastrar}>CADASTRE-SE</button>
          <p className="mensagem-erro">{erro}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
