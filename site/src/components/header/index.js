import './index.scss';
import '../../common/common.scss'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import ModalPerfil from '../modalPerfil'
import AvaliacaoCliente from '../avaliacaoCliente'
import storage from 'local-storage';


export default function Cabecalho() {

    const navigate = useNavigate('');

    const [ exibir, setExibir ] = useState(false)
    const [ exibirAvaliacao, setExibirAvaliacao ] = useState(false)


    function Perfil(){
        if (!storage('usuario-logado')) {
            navigate('/login')
        }
        else {
            setExibir(true)
        }
    }

    function fechar(){
        setExibir(false)
    }

    function avaliar(){
        setExibirAvaliacao(true)
    }

    function navegarCarrinho() {
        if (!storage('usuario-logado')) {
            navigate('/login')
        }
        else {
            navigate('/carrinho')
        }
    }

    function fecharAvaliacao(){
        setExibirAvaliacao(false)
    }

    const [prod, setProd] = useState(); 


    return (

        <header className='componente-header'>

    
            <ModalPerfil  exibir={exibir} fechar={fechar} /> 
            {/*<AvaliacaoCliente exibirAvaliacao={exibirAvaliacao} fecharAvaliacao={fecharAvaliacao} />*/}
            

            <div className='frete'>
                <img src='/images/caminhao.png' alt='caminhao' />
                <p className='frete-p'>FRETE GRÁTIS ACIMA DE R$200,00</p>
            </div>
            <div>
                <div className='header'>
                    <img className='logo' src='/images/logoo.png' alt='logo' onClick={() => navigate('/')} />
                    <div className='topicos-p'>
                        <p className='topicoo' onClick={() => navigate('/acessorios')}>ACESSÓRIOS</p>
                        <p className='topico' onClick={() => navigate('/masculino')}>MASCULINO</p>
                        <p className='topico' onClick={() => navigate('/feminino')}>FEMININO</p>
                        <p className='topico' onClick={() => navigate('/infantil')}>INFANTIL</p>
                    </div>
                    <div className="input-pesquisa">
                        <input type="text" placeholder="O que você está procurando?" value={prod} onChange={e => setProd(e.target.value)}  />
                        <img src='/images/lupa.png' onClick={() => navigate('/consulta/' + prod)} />
                    </div>
                    <div className='elementos-usuario'>
                        <img className="open-modal-button" src='/images/perfil.png' alt='perfil' onClick={Perfil} />
                        <img className='elemento-img' src='/images/atendimento.png' alt='atendimento' onClick={avaliar}/>
                        <hr className='elemento-img'></hr>
                        <img className='elemento-img' src='/images/sacola.png' onClick={navegarCarrinho} alt='sacola' />
                        <img className='elemento-img' src='/images/coracao.png' alt='coracao' />
                    </div>
                </div>
            </div>
             
        </header>
    )
}