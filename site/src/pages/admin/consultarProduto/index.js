import "./index.scss";

import { useEffect, useState } from "react";
import { buscarProdutos, removerProduto } from "../../../api/cadastrarProduto";
import { useNavigate } from "react-router-dom";

import HeaderAdm from "../../../components/headerAdm";

export default function ConsultarProduto() {
  const [produtos, setProdutos] = useState([]);

  const navigate = useNavigate();

  async function carregarProdutos() {
    const r = await buscarProdutos();
    setProdutos(r);
  }

  async function deletarProduto(id) {
    try {
      await removerProduto(id);
      await carregarProdutos();
      alert("Produto removido com sucesso");
    } catch (err) {
      alert(err.response.data.erro);
    }
  }

  function editar(id) {
    navigate(`/admin/cadastrarproduto/${id}`);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

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
              {produtos.map((item) => (
                <tr>
                  <td> {item.id} </td>
                  <td> {item.produto} </td>
                  <td>R$ {item.preco}</td>
                  <td> {item.marca} </td>
                  <td> { item.categoria }</td>
                  <td> {item.informacoes} </td>
                  <td> {item.disponivel ? "Sim" : "Não"} </td>
                  <td> {item.destaque ? "Sim" : "Não"} </td>
                  <td>
                    <span onClick={() => editar(item.id)}>Editar</span>
                  </td>
                  <td>
                    <span onClick={() => deletarProduto(item.id)}>Remover</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
