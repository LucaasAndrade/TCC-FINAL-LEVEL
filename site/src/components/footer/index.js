import "./index.scss";
import "../../common/common.scss";

export default function Footer() {
  return (
    <footer id="componente-footer">
      <div>
        <div className='carta-mensagem'>
          <img src="/images/carta.png" alt="mensagem" />
          <p>RECEBA AS NOVIDADES DA STREET ELEGANCE</p>
        </div>
        <div>
          <input className="input" type="text" placeholder="E-mail"></input>
          <button className='botao-enviar'>ENVIAR</button>
        </div>
      </div>
      
      <div className='parte-dois'>
        <div className='f-pagamento'>
            <p>FORMAS DE PAGAMENTO</p>
            <div>
                <img src='/images/cartao-azul.png' alt='cartao-azul' />
                <img className='icones' src='/images/cartao-amarelo.png' alt='cartao-amarelo' />
                <img className='icones' src='/images/boleto.png' alt='boleto' />
                <img className='icones' src='/images/pix.png' alt='pix' />
            </div>
        </div>
        <div>
            <img src='/images/logoo.png' alt='logo' />
        </div>
        <div>
            <p>SIGA A STREET ELEGANCE</p>
            <div className='redes-sociais'>
                <img src='/images/twitter.png' alt='twitter' />
                <img className='icones' src='/images/whatsapp2.png' alt='whastapp' />
                <img className='icones' src='/images/face1.png' alt='facebook' />
                <img className='icones' src='/images/instagram2.png' alt='instagram' />
            </div>
        </div>
      </div>
    </footer>
  );
}
