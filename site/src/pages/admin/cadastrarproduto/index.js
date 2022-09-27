

import "./index.scss";

import { useState } from 'react';
import { cadastrarProduto } from "../../../api/cadastrarProduto";
 

export default function Cadastrarproduto() {

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [disponivel, setDisponivel] = useState(false);
  const [destaque, setDestaque] = useState(false);
  const [informacoes, setInformacoes] = useState("");


  async function cadastrarClick() {
    try {



    } catch (err) {

      

    }
  }


  return (
    <main className="page-cadastro">
      <header>
        <div className="faixa-header">
          <img className="logo" src="/images/logo.png" alt="logo"></img>
          <div className="topicos">
            <p>ADICIONAR PRODUTO</p>
            <p className="p-topicos">LISTAR PEDIDOS</p>
            <p className="p-topicos">LISTAR PRODUTOS</p>
            <p className="p-topicos">CHAT</p>
            <p className="p-topicos">CUPONS</p>
            <p className="p-topicos">HISTÓRICO</p>
          </div>
          <div>
            <button className="botao-painel">PAINEL</button>
          </div>
        </div>
      </header>

      <section>
        <div className="fundo">
          <div className="fundo-cadastrar">
            <div className="elementos-esquerda">
              <div className="adicionar-imagens">
                <input
                  type="image"
                  className="campo-imagem"
                  src="/images/adicionar-imagem.png"
                  alt="adicionar-imagem"
                />
                <div className="adicionar-imagens-dois">
                  <div>
                    <input
                      type="image"
                      className="campo-imagem-dois"
                      src="/images/adicionar2.png"
                      alt="adicionar-imagem"
                    />
                    <input
                      type="image"
                      className="imagem-dois"
                      src="/images/adicionar2.png"
                      alt="adicionar-imagem"
                    />
                  </div>
                  <div>
                    <input
                      type="image"
                      className="campo-imagem-dois"
                      src="/images/adicionar2.png"
                      alt="adicionar-imagem"
                    />
                    <input
                      type="image"
                      className="imagem-dois"
                      src="/images/adicionar2.png"
                      alt="adicionar-imagem"
                    />
                  </div>
                </div>
              </div>
              <div className="textarea">
                <p>INFORMAÇÕES DO PRODUTO</p>
                <textarea id="story" name="story" rows="7" cols="46" value={informacoes} onChange={e => setInformacoes(e.target.value)}></textarea>
              </div>
            </div>
            <div className="campo-informacao">
              <div className="campo-input">
                <div>
                  <p>NOME DO PRODUTO</p>
                  <input value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>
                <div className="campo-info">
                  <p>VALOR</p>
                  <input value={valor} onChange={e => setValor(e.target.value)}></input>
                </div>
                <div className="campo-info">
                  <p>MARCA</p>
                  <input value={marca} onChange={e => setMarca(e.target.value)}></input>
                </div>
              </div>
              <div>
                <div className="cate-tama">
                  <div className="campo-info">
                    <p>CATEGORIA</p>
                    <select onChange={e => setCategoria(e.target.value)}>
                      <option selected disabled hidden ></option>
                      {categoria.map(item =>
                        <option value={item.id}>{item.categoria}</option>
                      )}
                    </select>
                  </div>
                  <div className="campo-info-1">
                    <p>TAMANHO</p>
                    <select onChange={e => setTamanho(e.target.value)}>
                      <option value="" selected disabled hidden></option>
                      <option value="Acessórios">PP</option>
                      <option value="Acessórios">P</option>
                      <option value="Masculino">M</option>
                      <option value="Feminino">G</option>
                      <option value="Infantil">GG</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="checkbox">
                    <p>DISPONÍVEL</p>
                    <input className="chek" type="checkbox" checked={disponivel} onChange={e => setDisponivel(e.target.checked)}></input>
                  </div>
                  <div className="checkbox">
                    <p>DESTAQUE</p>
                    <input className="chek" type="checkbox" checked={destaque} onChange={e => setDestaque(e.target.checked)}></input>
                  </div>
                </div>
              </div>

              <div className="botoes">
                <div>
                  <button className="botao-excluir">EXCLUIR PRODUTO</button>
                </div>
                <div>
                  <button className="botao-c-d">CADASTRA PRODUTO</button>
                </div>
                <div>
                  <button className="botao-c-d">SALVAR ALTERAÇÃO</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
