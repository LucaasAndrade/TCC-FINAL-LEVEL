import "./index.scss";
import "../../common/common.scss";

import { useState } from "react";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

import { enviarEmail } from "../../api/enviarEmail";

export default function Footer() {

  const [podeClicar, setPodeClicar] = useState(true);
  const [usuario, setUsuario] = useState({email: ''});


  async function inserir() {
    try {           
        if(podeClicar){
            setPodeClicar(false);
            const validar = await (usuario);
            
            try {
                enviarEmail(usuario, validar);
            } catch (error) {
                console.log(error);
            }

            toast.success('Cadastro do e-mail feito com sucesso!', {closeOnClick: true, pauseOnHover: false, autoClose: 1000})
            
        }
    } catch (error) {
        toast.error('❗ ' + error.response.data.error, {closeOnClick: false, pauseOnHover: false, autoClose: 1000});
        setPodeClicar(true);
    }
}

  return (
    <footer className="componente-footer">
      <ToastContainer />

      <div className="msg-email">
        <div className="carta-mensagem">
          <img src="/images/carta.png" alt="mensagem" />
          <p>RECEBA AS NOVIDADES DA STREET ELEGANCE</p>
        </div>
        <div className="div-input">
          <input className="input" type="text" placeholder="E-mail"></input>
          <button className="botao-enviar" onClick={()=>inserir()}>ENVIAR</button>
        </div>
      </div>
      <hr className="linha" />
      <div className="parte-dois">
        <div className="f-pagamento">
          <p>FORMAS DE PAGAMENTO</p>
          <div className="cartoes">
            <img src="/images/cartao-azul.png" alt="cartao-azul" />
            <img
              className="icones"
              src="/images/cartao-amarelo.png"
              alt="cartao-amarelo"
            />
            <img className="icones" src="/images/boleto.png" alt="boleto" />
            <img className="icones" src="/images/pix.png" alt="pix" />
          </div>
        </div>
        
        <div>
          <img className="logo" src="/images/logoo.png" alt="logo" />
        </div>

        <div className="redes-sociais">
          <p>SIGA A STREET ELEGANCE</p>
          <div className="cartoes">
            <img src="/images/twitter.png" alt="twitter" />
            <img
              className="icones"
              src="/images/whatsapp2.png"
              alt="whastapp"
            />
            <img className="icones" src="/images/face1.png" alt="facebook" />
            <img
              className="icone-insta"
              src="/images/instagram2.png"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
