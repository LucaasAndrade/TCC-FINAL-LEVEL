

import "./index.scss";

import { toast } from 'react-toastify';

import { CadastrarProduto, InserirTamanho,buscarProdutoPorId,listarCategorias, listarMarcas, listarTamanhoProduto, salvarImagens, AlterarProduto } from "../../../api/cadastrarProduto";
import { useState, useEffect } from 'react'

import HeaderAdm from '../../../components/headerAdm'
import { useParams } from "react-router-dom";
import { API_URL } from "../../../api/config";

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

      if (!id) {

        const r = await CadastrarProduto(categoriaId, marcaId, nome, PrecoProduto, informacoes, disponivel, destaque, tamanhosSelecionados);
        alert('Produto Salvo Com Sucesso!')
        await salvarImagens(r.id, imagem1, imagem2, imagem3, imagem4, imagem5);          
      }
      else {
        
      const r = await AlterarProduto(id, nome, PrecoProduto, informacoes, disponivel, destaque, tamanhosSelecionados);
      alert('Produto Alterado Com Sucesso!')
      await salvarImagens(id, imagem1, imagem2, imagem3, imagem4, imagem5);

      }

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

  function removerTamanho(id) {
    const x = tamanhosSelecionados.filter(item => item != id);
    setTamanhosSelecionados(x);
  }
  
  function escolherImagem(inputId) {
    document.getElementById(inputId).click();
  }
  
  function exibirImagem(imagem) {
    if (imagem == undefined) {
      return '/images/adicionar-imagem.png'
    } else if(typeof(imagem) == 'string') {
      return `${API_URL}/${imagem}`
    } else {
      return URL.createObjectURL(imagem);
    }
  }
  
  function exibirImagemDois(imagem) {
    if (imagem == undefined) {
      return '/images/adicionar2.png'
    } else if(typeof(imagem) == 'string') {
      return `${API_URL}/${imagem}`
    } else {
      return URL.createObjectURL(imagem);
    }
  }

  async function carregarProduto() {
    if (!id) return;
    
    const r = await buscarProdutoPorId(id);

    
    setNome(r.info.produto);     
    setValor(r.info.preco.toString());
    setMarcaId(r.info.id_marca);
    setCategoriaId(r.info.id_categoria);
    setInformacoes(r.info.informacoes);
    setDisponivel(r.info.disponivel);
    setDestaque(r.info.destaque);
    setTamanhosSelecionados(r.tamanhos)
    // console.log(r.tamanhos);


    if (r.imagem.length > 0) {
      setImagem1(r.imagem[0])
    }
    if (r.imagem.length > 1) {
      setImagem2(r.imagem[1])
    }
    if (r.imagem.length > 2) {
      setImagem3(r.imagem[2])
    }
    if (r.imagem.length > 3) {
      setImagem4(r.imagem[3])
    }
    if (r.imagem.length > 4) {
      setImagem5(r.imagem[4])
    }
  }
  
  
    useEffect(() => {
      carregarMarcas();
      carregaTamanhosProdutos(produtoId);
      carregarCategorias();
      carregarProduto();
    }, [])
  
  return (
    <main className="page-cadastro">
      <header>
        <HeaderAdm />
      </header>

      <section>
        <div className="fundo">
          <div className="fundo-cadastrar">
            <div className="elementos-esquerda">


            <div className='image-container'>
                    
                    <div className="sub-um">
                        <img src={exibirImagem(imagem1)} alt="" onClick={() => escolherImagem('imagem1')} />
                        {imagem1 ? <span onClick={() => setImagem1()}>Remover</span> : ''}
                    </div>
                    <div>
                      <div className="sub-dois">
                        <div>
                          <img src={exibirImagemDois(imagem2)} alt="" onClick={() => escolherImagem('imagem2')} />
                          {imagem2 ? <span onClick={() => setImagem2()}>Remover</span> : ''}
                        </div>
                        <div>
                          <img src={exibirImagemDois(imagem3)} alt="" onClick={() => escolherImagem('imagem3')} />
                          {imagem3 ? <span onClick={() => setImagem3()}>Remover</span> : ''}
                        </div>
                      </div>
                      <div className="sub-dois">
                        <div>
                          <img src={exibirImagemDois(imagem4)} alt="" onClick={() => escolherImagem('imagem4')} />
                          {imagem4 ? <span onClick={() => setImagem4()}>Remover</span> : ''}
                        </div>
                        <div>
                          <img src={exibirImagemDois(imagem5)} alt="" onClick={() => escolherImagem('imagem5')} />
                          {imagem5 ? <span onClick={() => setImagem5()}>Remover</span> : ''}
                        </div>
                      </div>
                    </div>
                    
                    <input type='file' id='imagem1' onChange={e => setImagem1(e.target.files[0])} />
                    <input type='file' id='imagem2' onChange={e => setImagem2(e.target.files[0])} />
                    <input type='file' id='imagem3' onChange={e => setImagem3(e.target.files[0])} />
                    <input type='file' id='imagem4' onChange={e => setImagem4(e.target.files[0])} />
                    <input type='file' id='imagem5' onChange={e => setImagem5(e.target.files[0])} />
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
                  <input className="input-info" value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>
                <div className="campo-info">
                  <p>VALOR</p>
                  <input className="input-info" type='number' value={valor} onChange={e => setValor(e.target.value)}></input>
                </div>
                <div className="campo-info">
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
                        <ul className="tamanhos" >
                    {tamanhosSelecionados.map(item => 
                      <li onClick={() => removerTamanho(item)}> {item}</li>
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
                <div>
                  <div className="campo-info">
                    <p>CATEGORIA</p>
                    <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)}>
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
