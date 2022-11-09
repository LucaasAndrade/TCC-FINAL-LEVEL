import "./index.scss";

import { useNavigate, useParams } from "react-router-dom";

import storage from "local-storage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Cabecalho from "../../../components/header";
import Footer from "../../../components/footer";
import CardCarrinho from "../../../components/CardCarrinho";
import { useEffect, useState } from "react";
import { buscarProdutoPorId } from "../../../api/cadastrarProduto";
import EstrelasAvaliacao from '../../../components/estrelasAvaliacao';
import ComponenteAvaliacao from "../../../components/avaliacao";




export default function Produto(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [produto, setProduto] = useState({
    categoria: [],
    imagem: [],
    info: [],
  });

  const { id } = useParams();

  async function carregarPagina() {
    const r = await buscarProdutoPorId(id);
    setProduto(r);
  }

  useEffect(() => {
    carregarPagina();
  }, []);

  const navigate = useNavigate("");

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
    alert("Produto Adicionada Ao Carrinho!");
  }

  return (
    <main className="page-produto">
      <header className="cabecalho">
        <Cabecalho />
      </header>
      <section>
        <div className="fundo-info-produto">
          {/*<div>
            <p>destaques</p>
          </div>*/}
          <div>
            <Carousel className="carrosel"
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              containerClass="carousel-container"
            //showDots={true}
            //customTransition="all .5"
            //removeArrowOnDeviceType={["tablet", "mobile"]}
            //dotListClass="custom-dot-list-style"
            //itemClass="carousel-item-padding-40-px"
            >
              <div className="fundo-carrosel">
              <div className="div-img-principal">
                <img className="img-principal"
                  src="/images/produtoteste.png"
                  alt="produto"
                />
              </div>
                <div className="imgs-carrosel">
                  <div>
                    <img src="/images/produtoteste2.png" alt="dest" />
                  </div>
                  <div>
                    <img src="/images/produtoteste3.png" alt="dest" />
                  </div>
                  <div>
                    <img src="/images/produtoteste4.png" alt="dest" />
                  </div>
                  <div>
                    <img src="/images/produtoteste5.png" alt="dest" />
                  </div>
                </div>
              </div>
            </Carousel>
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
              <button className="botao-adicionar" onClick={adicionarAoCarrinho}>
                adicionar ao carrinho
              </button>
                <button className="botao-curti">
                  <img className="img-coracao" src="/images/curtidos.png"></img>
                </button>
            </div>
            <div>
              <a href="" className="medidas">tabela de medidas</a>
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
                <p className="titu">{props.texto}Sobre o Produto</p>
                <p className="texto-sobre">Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
        </div>

        <hr className="linha" />

        <div className="avalicao-comentario">
            <div>
              <h3 className="titulo-sobre">avaliações</h3>
            </div>
            <div className="fundo-comentario">
              <div className="avaliacao-estrela">
                <EstrelasAvaliacao />
                <span>{props.Avaliacao} 0 </span>
              </div>
              <div>
                <ComponenteAvaliacao />
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
