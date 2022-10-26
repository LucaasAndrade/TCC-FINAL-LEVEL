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
          <div>
            <p>destaques</p>
          </div>
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
            <div className="estrelas">
              <p>☆</p>
              <p>☆</p>
              <p>☆</p>
              <p>☆</p>
              <p>☆</p>
            </div>
            <div>
              <p className="nome-produto">{produto.info.produto}Camiseta Adidas</p>
              <p className="marca-produto">{produto.info.marca}Adidas</p>
              <p className="preco-produto">{produto.info.preco}R$ 129,90</p>
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
      <section>
        <Footer />
      </section>
    </main>
  );
}
