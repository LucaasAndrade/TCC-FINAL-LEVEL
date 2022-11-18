import "./index.scss";

import { useNavigate, useParams } from "react-router-dom";

import storage from "local-storage";

import { API_URL } from "../../../api/config";


import Cabecalho from "../../../components/header";
import Footer from "../../../components/footer";
import CardCarrinho from "../../../components/CardCarrinho";
import { useEffect, useState } from "react";
import { buscarProdutoPorId } from "../../../api/cadastrarProduto";
import EstrelasAvaliacao from "../../../components/estrelasAvaliacao";
import ComponenteAvaliacao from "../../../components/avaliacao";
import AvaliacaoCliente from "../../../components/avaliacaoCliente";

export default function Produto(props) {

  const [produto, setProduto] = useState({
    categoria: [],
    imagem: [],
    info: [],
  });

  const [imagemPrincipal, setImagemPrincipal] = useState(0);
  const [imagem2, setImagem2] = useState();
  const [imagem3, setImagem3] = useState();
  const [imagem4, setImagem4] = useState();
  const [imagem5, setImagem5] = useState();
  
  const { id } = useParams();

  async function carregarPagina() {
    const r = await buscarProdutoPorId(id);
    setProduto(r);
  }

  function exibirImagemPrincipal() {
    if (produto.imagens.length > 0) {
        return API_URL + '/' + produto.imagens[imagemPrincipal];
    }
    else {
        return '/produto-padrao.png';
    }
  } 

  function exibirImagemProduto(imagem) {
      return API_URL + '/' + imagem;
    
  }

  useEffect(() => {
    carregarPagina();
  }, []);

  const navigate = useNavigate("");

  function carrinho() {
    navigate('/carrinho')
  }

  function adicionarAoCarrinho() {
    let carrinho = [];
    if (storage("carrinho")) {
      carrinho = storage("carrinho");
    }

    if (!carrinho.find((item) => item.id === id)) {
      carrinho.push({
        id: id,
        qtd: 1,
      });
      storage("carrinho", carrinho);
    }
    alert("Produto adicionado ao carrinho!");
  }

  async function carregarProduto() {
    if (!id) return;
    
    const r = await buscarProdutoPorId(id);

    if (r.imagem.length > 2) {
      setImagem2(r.imagem[2])
    }
    if (r.imagem.length > 3) {
      setImagem3(r.imagem[3])
    }
    if (r.imagem.length > 4) {
      setImagem4(r.imagem[4])
    }
    if (r.imagem.length > 5) {
      setImagem5(r.imagem[5])
    }
  }

  useEffect(() => {
    carregarProduto();
  }, [])

  return (
    <main className="page-produto">
      <header className="cabecalho">
        <Cabecalho />
      </header>
      <section>
        <div className="fundo-info-produto">
          <div className="destacar">
            <div>
                <div className="div-img">
                  <img src={exibirImagemProduto(imagem2)} alt="" />
                </div>
                <div className="div-img">
                <img src={exibirImagemProduto(imagem3)} alt="" />
                </div>
                <div className="div-img">
                <img src={exibirImagemProduto(imagem4)} alt="" />
                </div>
                <div className="div-img">
                <img src={exibirImagemProduto(imagem4)} alt="" />
                </div>
            </div>

            <div className="alinhamento-destac">
              <button className="destaque">destaques</button>
            
              <div className="div-img">
                {
                  produto.imagem.map((item, pos) => 
                    <img className="img-principal" src={exibirImagemProduto(item)} onClick={() => setImagemPrincipal(pos)} />
                  )
                }
              </div>
            </div>
          </div>

          <div className="info-produto">
            <EstrelasAvaliacao />
            <div>
              <p className="nome-produto">{produto.info.produto}</p>
              <p className="marca-produto">{produto.info.marca}</p>
              <p className="preco-produto">R$ {produto.info.preco}</p>
            </div>
            <div>
              <select>
                <option value="" selected disabled hidden></option>
                <option value="PP"> PP </option>
                <option value="P"> P </option>
                <option value="M"> M </option>
                <option value="G"> G </option>
                <option value="GG"> GG </option>
              </select>

              <select className="select">
                <option value="" selected disabled hidden></option>
                <option>{props.quantidade}</option>
              </select>
            </div>
            <div>
              <p>{props.situacao}</p>
            </div>
            <div className="botoes">
              <button className="botao-adicionar" onClick={adicionarAoCarrinho} >
                adicionar ao carrinho
              </button>
              <button className="botao-curti">
                <img className="img-coracao" src="/images/curtidos.png"></img>
              </button>
            </div>
            <div>
              <a href="" className="medidas">
                tabela de medidas
              </a>
            </div>

            <hr className="linha" />

            <div>
              <p className="frete">Calcular frete e entrega</p>
              <input type="text"></input>
              <button className="botao-calcular">calcular</button>
            </div>
          </div>
        </div>
      </section>

      <section className="fundo-informacao-produto">
        <div className="div-sobre">
          <h3 className="titulo-sobre">informações</h3>
          <div className="texto-info">
            <p className="titu">Sobre o Produto</p>
            <p className="texto-sobre">
              {props.texto} {produto.info.informacoes} {" "}
            </p>
          </div>
        </div>

        <hr className="linha-dois" />

        <div className="avalicao-comentario">
          <div>
            <h3 className="titulo-sobre">avaliações</h3>
          </div>
          <div className="fundo-comentario">
            <div className="avaliacao-estrela">
              <EstrelasAvaliacao avaliacao="4.20" />
            </div>
            <div className="avaliacao">
              <ComponenteAvaliacao />

              <hr className="linha" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
