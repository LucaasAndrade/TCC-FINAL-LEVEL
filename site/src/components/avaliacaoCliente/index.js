import './index.scss'

import EstrelasAvaliacao from '../estrelasAvaliacao'


export default function AvaliacaoCliente({ exibirAvaliacao, fecharAvaliacao }) {

    {/*function lerEstrelas(valor, estrela) {
      
        if (valor <= estrela)
            return 'star-icon2 ativo'
        else
            return 'star-icon2'

    }*/}

    return (

        <div className='comp-modal-avaliacao'>

            <div className={`modal-avaliacao ${exibirAvaliacao ? 'exibirAvaliacao' : ''}`}>
                <div className='conteudo-avaliacao'>
                    <button className='fechar' onClick={fecharAvaliacao}>x</button>
                        <h4 className='h4-avaliacao'>avaliação de clientes</h4>

                        <hr className='linha' />

                        <p className='p-avaliacao'>Deixe sua Avaliação</p>
                    <div>
                        <div className='aval'>
                            <EstrelasAvaliacao />
                        </div>
                        <div>
                            <div className="input">
                                <label className="p-input">Nome</label>
                                <input type="text"></input>
                            </div>
                            <div    className="input">
                                <label className="p-input">E-mail</label>
                                <input type="text"></input>
                            </div>
                            <div    className="input">
                                <label className="p-input">Título da avaliacao </label>
                                <input type="text"></input>
                            </div>
                            <div className="textarea">
                                <p className='p-text'>Conte mais sobre o que achou do produto</p>
                                <textarea className="descricao" placeholder='Sua avaliação' name="story" rows="7" cols="46"></textarea>
                                <button className="botao-enviar">enviar avaliacao</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}