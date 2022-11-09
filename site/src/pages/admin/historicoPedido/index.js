import "./index.scss";

import HeaderAdm from "../../../components/headerAdm";

export default function ConsultarProduto(props) {
  
  return (
    <main id="page-consultar-produto">
      <header>
        <HeaderAdm />
      </header>
      <section className="fundo-consulta">
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
        <div className="form">
          <table>
            <thead>
              <tr>
                <th> ID </th>
                <th> Produto </th>
                <th> Preço </th>
                <th> Marca </th>
                <th> Categoria </th>
                <th> Informacoes </th>
                <th> Disponivel </th>
                <th> Destaque </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td> {props.id} </td>
                  <td> {props.produto} </td>
                  <td>R$ {props.preco}</td>
                  <td> {props.marca} </td>
                  <td> { props.categoria }</td>
                  <td> {props.informacoes} </td>
                  <td> {props.disponivel} </td>
                  <td> {props.destaque} </td>
                  <td>
                    <span>Editar</span>
                  </td>
                  <td>
                    <span>Remover</span>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
