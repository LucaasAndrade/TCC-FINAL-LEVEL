import "./index.scss";

export default function Adminprodutos() {

  return (
    <main className="page-produtos">
      <header>
        <div className="faixa-header">
          <img src="/images/logo.png" alt="logo"></img>
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
    </main>
  );
}
