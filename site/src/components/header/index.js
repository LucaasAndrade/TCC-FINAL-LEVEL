import './index.scss';
import '../../common/common.scss'

//import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import ModalPerfil from '../modalPerfil'



export default function Cabecalho() {

    const navigate = useNavigate('');

    const [ exibir, setExibir] = useState(false)

    function exibirModal(){
        setExibir(true)
    }

    function fechar(){
        setExibir(false)
    }

    function Home() {
        navigate("/")
    }

    function AcessoriosPage() {
        navigate("/acessorios")
    }

    function Feminino() {
        navigate("/feminino")
    }

    function Masculino() {
        navigate("/masculino")
    }

    function Infantil() {
        navigate("/infantil")
    }



    return (

        <header className='componente-header'>
    
            <ModalPerfil  exibir={exibir} fechar={fechar} />   

            <div className='frete'>
                <img src='/images/caminhao.png' alt='caminhao' />
                <p className='frete-p'>FRETE GRÁTIS ACIMA DE R$200,00</p>
            </div>
            <div>
                <div className='header'>
                    <img className='logo' src='/images/logoo.png' alt='logo' onClick={Home} />
                    <div className='topicos-p'>
                        <p className='topicoo' onClick={AcessoriosPage}>ACESSÓRIOS</p>
                        <p className='topico' onClick={Masculino}>MASCULINO</p>
                        <p className='topico' onClick={Feminino}>FEMININO</p>
                        <p className='topico' onClick={Infantil}>INFANTIL</p>
                    </div>
                    <div className="input-pesquisa">
                        <input type="text" id="lupa" placeholder="O que você está procurando?" />
                    </div>
                    <div className='elementos-usuario'>
                        <img className="open-modal-button" src='/images/perfil.png' alt='perfil' onClick={exibirModal} />
                        <img className='elemento-img' src='/images/atendimento.png' alt='atendimento' />
                        <hr className='elemento-img'></hr>
                        <img className='elemento-img' src='/images/sacola.png' alt='sacola' />
                        <img className='elemento-img' src='/images/coracao.png' alt='coracao' />
                    </div>
                </div>
            </div>
             
        </header>
    )
}