import "./index.scss";

import { useNavigate } from "react-router-dom";
import storage from 'local-storage';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { CadastrarUsuario } from "../../../api/Usuario";


import Cabecalho from "../../../components/header";
import Footer from "../../../components/footer";
import ComponenteDestaques from "../../../components/destaques";
import CarroselMarcas from "../../../components/carroselmarcas";
import AcessoriosHome from "../../../components/acessoriosHome";
import { useState, useEffect, useRef } from "react";

export default function CadastroUser() {
  const navigate = useNavigate("");
  const ref = useRef();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimento] = useState("");

  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefone2, setTelefone2] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function salvar() {

    try {
      const r = await CadastrarUsuario(nome, sobrenome, nascimento, cpf, telefone, telefone2, email, senha);
      toast.success('Usuário cadastrado com sucesso', {autoClose: 1000, delay: 0, pauseOnHover: false});

    }
    catch (err) {
      alert(err.response.data.erro)
    }
  }

  // async function cadLogin() {
  //   const r = await cadastrarLogin();
  // }


  // useEffect(() => {
  //   cadLogin();
  // }, [])



  return (
    <main className="page-user-cadastro">
      <ToastContainer />
      <header>
        <div className="faixa-header">
          <div>
            <img src="/images/retan-branco.png" alt="retangulo" />
          </div>
          <img className="logo" src="/images/logoo.png" alt="logo" onClick={() => navigate('/')} />
          <div>
            <button className="botao-painel" onClick={() => navigate('/')}>
              VOLTAR
            </button>
          </div>
        </div>
      </header>
      <section className="fundo-cadastro">
        <div className="cadastro-user">
            <div className='fundo-perfil'>
              <img className='img-perfil' src='/images/usuario-perfil.png'></img>
            </div>
            <div className="espaco-input">
              <input type="text" placeholder="Nome*" value={nome} onChange={e => (setNome(e.target.value))}></input>
              <input className="input-direita" type="text" placeholder="Sobrenome*" value={sobrenome} onChange={e => (setSobrenome(e.target.value))}></input>
            </div>

            <div className="input">
              <input type="date" placeholder="Dia*" value={nascimento} onChange={e => (setNascimento(e.target.value))}></input>
              <input className="input-direita" type="text" placeholder="CPF*" value={cpf} onChange={e => (setCpf(e.target.value))}></input>
            </div>

            <div className="input">
              <input type="tel" placeholder="Telefone*" value={telefone} onChange={e => (setTelefone(e.target.value))}></input>
              <input className="input-direita" type="tel" placeholder="Outro telefone" value={telefone2} onChange={e => (setTelefone2(e.target.value))}></input>
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
                  <input type="text" placeholder="exemplo@exemplo.com" value={email} onChange={e => (setEmail(e.target.value))}></input>
                </div>
                <div className="input-login">
                  <label className="p-input">Senha </label>
                  <input type="password" placeholder="*****" value={senha} onChange={e => (setSenha(e.target.value))}></input>
                </div>
              </div>
              <button className="botao-cadastrar" onClick={salvar}>CADASTRE-SE</button>
              <p className="mensagem-erro"></p>
            </div>
          </div>
            <button className="botao-ajuda">precisa de ajuda?</button>
        </div>
      </section>
    </main>
  );
}
