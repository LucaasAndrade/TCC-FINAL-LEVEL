import "./index.scss";

import { useNavigate } from "react-router-dom";
import storage from 'local-storage';

import { CadastrarUsuario,loginUsua } from "../../../api/loginUsua";

import Cabecalho from "../../../components/header";
import Footer from "../../../components/footer";
import CarroselDestaques from "../../../components/carrosel";
import CarroselMarcas from "../../../components/carroselmarcas";
import AcessoriosHome from "../../../components/acessoriosHome";
import { useState,useEffect,useRef } from "react";

export default function CadastroUser() {
  const navigate = useNavigate("");
  const ref = useRef();

  const [nome,setNome] = useState("");
  const [sobrenome,setSobrenome] = useState("");
  const [nascimento,setNascimento] = useState("");

  const [cpf,setCpf] = useState ("");
  const [telefone,setTelefone] = useState("");
  const [telefone2,setTelefone2] = useState ("");

  const [cep,setCep]= useState("");
  const [rua,setRua] = useState("");
  const [estado,setEstado] = useState("");

  const [cidade,setCidade] = useState("");
  const [numero,setNumero] = useState("");
  const [referencia,setReferencia] = useState("");
  

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  useEffect(()=>{
    storage.remove('usuario-logado');
}, []);

useEffect(()=>{
  if(storage('usuario-logado'));
     
}, []);
  
  
 

  async function salvar() {

    try  {
      const r = await CadastrarUsuario(nome, sobrenome, nascimento, cpf, telefone, telefone2, cep,rua,estado,cidade,numero,referencia);
       alert('Usuario Cadastrado com sucesso');

       const resp = await loginUsua(email,senha)
      storage('usuario-Cadastrado com sucesso', resp);
              
    }
    catch (err) {
      console.log(err)
      alert(err.response.data.erro)
    }
 }






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
              <input type="text" placeholder="Nome*" value={nome} onChange ={e =>(setNome(e.target.value))}></input>
              <input className="input-direita" type="text" placeholder="Sobrenome*" value={sobrenome} onChange={e =>(setSobrenome(e.target.value))}></input>
            </div>
            <div className="input">
              <input type="date" placeholder="Dia*" value={nascimento} onChange={e =>(setNascimento(e.target.value))}></input>
              <input className="input-direita" type="text" placeholder="CPF*" value={cpf} onChange={e =>(setCpf(e.target.value))}></input>
            </div>
            <div className="input">
              <input type="tel" placeholder="Telefone*" value={telefone} onChange={e =>(setTelefone(e.target.value))}></input>
              <input className="input-direita" type="tel" placeholder="Outro telefone" value={telefone2} onChange={e =>(setTelefone2(e.target.value))}></input>
            </div>
            <div className="input">
              <input type="text" placeholder="Seu CEP*" value={cep} onChange={e =>(setCep(e.target.value))}></input>
              <input className="input-direita" type="text" placeholder="Nome da rua*" value={rua} onChange={e =>(setRua(e.target.value))}></input>
            </div>
            <div className="input">
              <input type="text" placeholder="Estado*" value={estado} onChange={e =>(setEstado(e.target.value))}></input>
              <input className="input-direita" type="text" placeholder="Cidade*" value={cidade} onChange={e =>(setCidade(e.target.value))}></input>
            </div>
            <div className="input">
              <input type="number" placeholder="Número*" id="input-numero" value={numero} onChange={e =>(setNumero(e.target.value))}></input>
              <input type="text" placeholder="Ponto de referência" id="input-referencia" value={referencia} onChange={e =>(setReferencia(e.target.value))}></input>
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
            <input type="text" placeholder="exemplo@exemplo.com"  value={email} onChange={e =>(setEmail(e.target.value))}></input>
          </div>
          <div className="input-login">
            <label className="p-input">Senha </label>
            <input type="password" placeholder="*****"  value={senha} onChange={e =>(setSenha(e.target.value))}></input>
          </div>
          </div>
          <button className="botao-cadastrar"  onClick={ salvar}>CADASTRE-SE</button>
          <p className="mensagem-erro"></p>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
