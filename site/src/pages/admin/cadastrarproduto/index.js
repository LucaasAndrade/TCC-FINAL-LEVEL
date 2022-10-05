

import "./index.scss";

import { toast } from 'react-toastify';

import { CadastrarProduto, InserirTamanho, listarCategorias, listarMarcas, listarTamanhoProduto } from "../../../api/cadastrarProduto";
import { useState, useEffect } from 'react'



export default function Cadastrarproduto() {

  const [produtoId, setProdutoId] = useState();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  const [categoriaId, setCategoriaId] = useState();
  const [categorias, setCategorias] = useState([]);

  const [marcaId, setMarcaId] = useState();
  const [marcas, setMarcas] = useState([]);

  const [tamanhos, setTamanhos] = useState([]);
  const [tamanhosSelecionados, setTamanhosSelecionados] = useState([]);
  const [tamanho, setTamanho] = useState("");

  // console.log(tamanhos);
  console.log(tamanhosSelecionados);
  // console.log(tamanho); 


  const [disponivel, setDisponivel] = useState(false);
  const [destaque, setDestaque] = useState(false);
  const [informacoes, setInformacoes] = useState("");

  // console.log(nome);
  // console.log(valor);
  // console.log(marcaId);
  // console.log(marcaId);
  // console.log(tamanhos);
  // console.log(disponivel);
  // console.log(destaque);
  // console.log(informacoes);


  async function salvar() {
    try {
      const PrecoProduto = Number(valor.replace(',', '.'));

      const r = await CadastrarProduto(categoriaId, marcaId, nome, PrecoProduto, informacoes, disponivel, destaque, tamanhosSelecionados);
      
      alert('Produto Salvo Com Sucesso!')

    } catch (err) {

      alert(err.response.data.erro)

    }
  }

  async function carregarMarcas() {
    const r = await listarMarcas();
    setMarcas(r);
  }

  async function carregarCategorias() {
    const r = await listarCategorias();
    setCategorias(r);
  }

  async function carregaTamanhosProdutos(id) {
    const r = await listarTamanhoProduto(id);
    setTamanhos(r);
  }

  async function adicionarTamnahos() {
    
  }

  function adicionarTamanhos() {
    let permissao = true;
    if (!tamanho) {
      alert('Por favor, escolha um tamanho')
      permissao = false;
    }
    for (let i = 0; i < tamanhosSelecionados.length; i++) {
      if (tamanho === tamanhosSelecionados[i]) {
        alert('Este tamanho já foi selecionado')
        permissao = false
      }
    }
    if(permissao){
    const tam = [...tamanhosSelecionados, tamanho];
    setTamanhosSelecionados(tam);}
  }

  function todosTamanhos() {
    const tam = ['PP', 'P', 'M', 'G', 'GG'];
    setTamanhosSelecionados(tam);
  }

  useEffect(() => {
    carregarMarcas();
    carregaTamanhosProdutos(produtoId);
    carregarCategorias();
  }, [])

  return (
    <main className="page-cadastro">
      <header>
        <div className="faixa-header">
          <img className="logo" src="/images/logoo.png" alt="logo"></img>
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
                <textarea className="descricao" name="story" rows="7" cols="46" value={informacoes} onChange={e => setInformacoes(e.target.value)}></textarea>
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
                  <input type='number' value={valor} onChange={e => setValor(e.target.value)}></input>
                </div>
                <div className="campo-info">
                  <p>MARCA</p>
                  <select value={marcaId} onChange={e => setMarcaId(e.target.value)}>
                    <option value="" selected disabled hidden></option>
                    {marcas.map(item =>
                      <option value={item.id_marca_produto}> {item.nm_marca} </option>
                    )}
                  </select>
                </div>
              </div>
              <div>
                <div className="cate-tama">
                  <div className="campo-info">
                    <p>CATEGORIA</p>
                    <select onChange={e => setCategoriaId(e.target.value)}>
                      <option selected disabled hidden ></option>
                      {categorias.map(item =>
                        <option value={item.id_categoria}> {item.nm_categoria} </option>
                      )}
                    </select>
                  </div>
                  <div className="campo-info-1">
                    <p>TAMANHO</p>
                    <select onChange={e => setTamanho(e.target.value)}>
                      <option value="" selected disabled hidden></option>
                      <option value="PP"> PP </option>
                      <option value="P"> P </option>
                      <option value="M"> M </option>
                      <option value="G"> G </option>
                      <option value="GG"> GG </option>
                    </select>
                    <button onClick={adicionarTamanhos}> adicionar tamanhos </button>
                    <button onClick={todosTamanhos}>todos tamanhos </button>
                        <ul>
                    {tamanhosSelecionados.map(item => 
                      <li> {item}</li>
                      )}
                      </ul>
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

              <div className="botoes" >
                <div>
                  <button className="botao-excluir">EXCLUIR PRODUTO</button>
                </div>
                <div>
                  <button className="botao-c-d" onClick={salvar}>CADASTRAR PRODUTO</button>
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
