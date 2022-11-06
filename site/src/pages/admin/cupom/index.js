import "./index.scss";

import HeaderAdm from "../../../components/headerAdm";

export default function AdicionarCupom() {
  return (
    <main className="page-adicionar-cupom">
      <header>
        <HeaderAdm />
      </header>
      <section className="fundo-informacoes">
        <div className="div-informacoes">
          <h2>Cadastrar Cupom</h2>
          <div className="div-cupom">
            <input
              className="input-cupom"
              type="text"
              placeholder="Cupom*"
            ></input>
            <p className="p-cupom">
              O cupom é a chave do seu desconto. Ele que deve ser divulgado e
              inserido durante o pagamento do pedido. Ex:MEUCUPOM
            </p>
          </div>
          <div className="informacoes">
            <div className="info-dados">
              <p>Valores</p>
              <div className="div-input">
                <input
                  type="text"
                  placeholder="Porcentagem*"
                ></input>
                <input
                  className="input-info"
                  type="number"
                  placeholder="Valor*"
                ></input>
                <input
                  className="input-info"
                  type="number"
                  placeholder="Valor Mínimo*"
                ></input>
              </div>
              <p>Configurações</p>
              <div className="div-input">
                <input type="date" placeholder="Data Inicial*"></input>
                <input className="input-info" type="date" placeholder="Data Final*"></input>
                <select className="input-info">
                  <option disabled hidden selected>
                    Forma de Pagamento
                  </option>
                  <option value="1">Débito</option>
                  <option value="2">Crédito</option>
                  <option value="3">Boleto</option>
                  <option value="4">PIX</option>
                </select>
              </div>
              <div>
                  <p>Quantidades</p>
                <div className="cupom-info-quant">
                    <textarea
                        className="descricao"
                        name="story"
                        rows="7"
                        cols="46"
                        placeholder="Descricão*"
                    ></textarea>
                  <div className="text-inputs">
                    <input type="text" placeholder="Limite de usos*"></input>
                    <input className="input-limite" type="text" placeholder="Limite por cliente*"></input>
                  </div>
                </div>
              </div>

              <div className="botoes">
              <div>
                  <button className="botao-excluir">EXCLUIR CUPOM</button>
                  <button className="botao-c-d">CADASTRAR CUPOM</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
