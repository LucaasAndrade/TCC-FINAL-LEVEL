

import "./index.scss";

import { toast } from 'react-toastify';

import { CadastrarProduto, InserirTamanho,buscarProdutoPorId,listarCategorias, listarMarcas, listarTamanhoProduto, salvarImagens } from "../../../api/cadastrarProduto";
import { useState, useEffect } from 'react'

import HeaderAdm from '../../../components/headerAdm'
import { useParams } from "react-router-dom";

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

  const [disponivel, setDisponivel] = useState(false);
  const [destaque, setDestaque] = useState(false);
  const [informacoes, setInformacoes] = useState("");

  const [imagem1, setImagem1] = useState();
  const [imagem2, setImagem2] = useState();
  const [imagem3, setImagem3] = useState();
  const [imagem4, setImagem4] = useState();
  const [imagem5, setImagem5] = useState();

  const {id} = useParams();

  async function salvar() {
    try {
      const PrecoProduto = Number(valor.replace(',', '.'));

      const r = await CadastrarProduto(categoriaId, marcaId, nome, PrecoProduto, informacoes, disponivel, destaque, tamanhosSelecionados);
      await salvarImagens(r.id, imagem1, imagem2, imagem3, imagem4, imagem5);
      
      alert('Produto Salvo Com Sucesso!')

    } catch (err) {
      console.log(err)
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

  function escolherImagem(inputId) {
    document.getElementById(inputId).click();
  }
  
  function exibirImagem(imagem) {
    if (imagem == undefined) {
      return '/images/adicionar-imagem.png'
    } else {
      return URL.createObjectURL(imagem);
    }
  }
  
  function exibirImagemDois(imagem) {
    if (imagem == undefined) {
      return '/images/adicionar2.png'
    } else {
      return URL.createObjectURL(imagem);
    }
  }

  return (
    <main className="page-cadastro">
      <header>
        <HeaderAdm />
      </header>

      <section>
        <div className="fundo">
          <div className="fundo-cadastrar">
            <div className="elementos-esquerda">
              <div className="adicionar-imagens">
                <img
                  className="campo-imagem"
                  src={exibirImagem(imagem1)}
                  alt="adicionar-imagem" id="camera"
                  onClick={() => escolherImagem('imagem1')}
                />
                <input type='file' id='imagem1' name="imagem-arq" onChange={e => setImagem1(e.target.files[0])} />

                <div className="adicionar-imagens-dois">
                  <div>
                    <img
                      className="campo-imagem-dois"
                      src={exibirImagemDois(imagem2)}
                      alt="adicionar-imagem"
                      onClick={() => escolherImagem('imagem2')}
                    />
                    <input type='file' id='imagem2' onChange={e => setImagem2(e.target.files[0])} />

                    <img
                      className="imagem-dois"
                      src={exibirImagemDois(imagem3)}
                      alt="adicionar-imagem"
                      onClick={() => escolherImagem('imagem3')}
                    />
                    <input type='file' id='imagem3' onChange={e => setImagem3(e.target.files[0])} />

                  </div>
                  <div>
                    <img
                      className="campo-imagem-dois"
                      src={exibirImagemDois(imagem4)}
                      alt="adicionar-imagem"
                      type="image"
                      onClick={() => escolherImagem('imagem4')}
                    />
                    <input type='file' id='imagem4' onChange={e => setImagem4(e.target.files[0])} />

                    <img
                      type="image"
                      className="imagem-dois"
                      src={exibirImagemDois(imagem5)}
                      alt="adicionar-imagem"
                      onClick={() => escolherImagem('imagem5')}
                    />
                    <input type='file' id='imagem5' onChange={e => setImagem5(e.target.files[0])} />

                  </div>
                </div>
              </div>
              <div className="textarea">
                <p>INFORMAÇÕES DO PRODUTO</p>
                <textarea className="descricao" name="story" rows="7" cols="46" value={informacoes} onChange={e => setInformacoes(e.target.value)}></textarea>
              </div>
            </div>
            <div className="campo-informacao">
              <div>
                <div>
                  <p>NOME DO PRODUTO</p>
                  <input value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>
                <div className="campo-info">
                  <p>VALOR</p>
                  <input type='number' value={valor} onChange={e => setValor(e.target.value)}></input>
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
                    <button className="botao-adicionar-tamanho" onClick={adicionarTamanhos}> Adicionar Tamanhos </button>
                    <button className="botao-adicionar-tamanho" onClick={todosTamanhos}> Adicionar Todos </button>
                        <ul>
                    {tamanhosSelecionados.map(item => 
                      <li> {item}</li>
                      )}
                      </ul>
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
