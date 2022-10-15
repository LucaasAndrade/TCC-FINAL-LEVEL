import "./index.scss";

import HeaderAdm from "../../../components/headerAdm";
import Produtos from "../../../components/produtos";

export default function ProdutosAdm() {
  return (
    <main id="page-produtos">
      <header>
        <HeaderAdm />
      </header>
      <section className="fundo-cartao">
        <div className="fundo-filtro">
          <p>LISTA DE PRODUTOS</p>
          <div className="div-filtrar">
          <p>FILTRAR POR:</p>
          <select>
            <option value="" selected disabled hidden></option>
            <option value="Disponíveis"> Disponíveis </option>
            <option value="Não Disponíveis"> Não Disponíveis </option>
            <option value="Categoria"> Categoria </option>
          </select>
          </div>
        </div>
        <div className="fundo-cartoes">
          <div>
            <div className="produtos">
              <Produtos
                imagem="/images/produto31.png"
                nome="Moletom Street Masculino"
                preco="R$ 60,00"
                categoria="MASCULINO"
              />
              <Produtos
                imagem="/images/produto32.png"
                nome="Tênis Adidas Masculino"
                preco="R$ 60,00"
                categoria="ACESSÓRIOS"
              />
              <Produtos
                imagem="/images/produto32.png"
                nome="Tênis Adidas Masculino"
                preco="R$ 60,00"
                categoria="ACESSÓRIOS"
              />
              <Produtos
                imagem="/images/produto32.png"
                nome="Tênis Adidas Masculino"
                preco="R$ 60,00"
                categoria="ACESSÓRIOS"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
