import './index.scss'

import { useNavigate } from "react-router-dom";

export default function EditarPerfil() {

    const navigate = useNavigate('');

    function Home() {
        navigate("/")
    }

    return (

        <main className='editar-perfil'>
            <header>
                <div className="faixa-header">
                    <div>
                        <img src="/images/retan-branco.png" alt="retangulo" />
                    </div>
                    <img className="logo" src="/images/logoo.png" alt="logo" onClick={Home} />
                    <div>
                        <button className="botao-painel" onClick={Home}>VOLTAR</button>
                    </div>
                </div>
            </header>
            <section>
                <div className='fundo-editar'>
                    <div className="editar-user">
                            <div>
                                <img className='img-perfil' src='/images/usuario-perfil.png' />
                            </div>
                            <div className="espaco-input">
                                <input type="text" placeholder="E-mail*" />
                                <input className="input-direita" type="text" placeholder="Telefone*" />
                            </div>

                            <div className="input">
                            <input type="text" placeholder="CEP*" />
                                <input className="input-direita" type="text" placeholder="Nome da rua*" />
                            </div>

                            <div className="input-text">
                                <textarea className="descricao" name="story" rows="7" cols="46" placeholder='Descreva o ponto de referência mais próximo de sua residência...' />
                                <input className="input-direita" type="tel" placeholder="Número" />
                            </div>
                    </div>
                </div>
            </section>
        </main>
    )
}