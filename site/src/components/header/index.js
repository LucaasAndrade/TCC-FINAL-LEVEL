import './index.scss';
import '../../common/common.scss'

import { useNavigate } from 'react-router-dom';




export default function Cabecalho() {

    ///MODAL 

    {/*const getElement = (...queries) => document.querySelector(...queries);

    const button = getElement('.open-modal-button');
    const container = getElement('.modal-container');
    const modal = getElement('.modal');

    const activeModalClass = 'modal-show';

    const openModal = () => container.classList.add(activeModalClass);
    const closeModal = () => container.classList.remove(activeModalClass);

    button.addEventListener('click', openModal);
    container.addEventListener('click', (event) => {
        if (modal.contains(event.target)) return;

        closeModal();
    });*/}

    const navigate = useNavigate('');
    
    function Home(){
        navigate ("/home")
    }

    function AcessoriosPage(){
        navigate ("/acessorios")
    }

    function Feminino() {
        navigate ("/feminino")
    }

    function Masculino() {
        navigate ("/masculino")
    }

    function Infantil() {
        navigate ("/infantil")
    }


    return (
        <header className='componente-header'>
            
            <div className='frete'>
                <img src='/images/caminhao.png' alt='caminhao' />
                <p className='frete-p'>FRETE GRÁTIS ACIMA DE R$200,00</p>
            </div>
            <div>
            <div className='header'>
                <img className='logo' src='/images/logoo.png' alt='logo' onClick={Home}/>
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
                    <img className="open-modal-button" src='/images/perfil.png' alt='perfil' />
                    <img className='elemento-img' src='/images/atendimento.png' alt='atendimento' />
                    <hr className='elemento-img'></hr>
                    <img className='elemento-img' src='/images/sacola.png' alt='sacola' />
                    <img className='elemento-img' src='/images/coracao.png' alt='coracao' />
                </div>
            </div>
            </div>


            <div className="modal-container">
                <div className="modal">
                    <div className='fundo-perfil'>
                        <img src='/images/usuario-perfil.png'></img>
                        <h5>Nome Sobrenome</h5>
                    </div>
                    <div>
                        <p>E-mail</p>
                        <p>Telefone</p>
                    </div>
                    <div>
                        <div className='img-topico'>
                            <img src='/images/mensagens.png' alt='mensagens'></img>
                            <p>Minhas Mensagens</p>
                        </div>
                        <div className='img-topico'>
                            <img src='/images/cupons.png' alt='cupons'></img>
                            <p>Meus Cupons</p>
                        </div>
                        <div className='img-topico'>
                            <img src='/images/pedidos.png' alt='Meus Pedidos'></img>
                            <p>Meus Pedidos</p>
                        </div>
                    </div>
                    <div>
                        <div className='img-topico'>
                            <img src='/images/curtidos.png' alt='curtidos'></img>
                            <p>Curtidos</p>
                        </div>
                        <div className='img-topico'>
                            <img src='/images/sacola-perfil.png'></img>
                            <p>Adicionados ao Carrinho</p>
                        </div>
                    </div>
                    <div>
                        <div className='img-topico'>
                            <img src='/images/editar.png'></img>
                            <p>Editar</p>
                        </div>
                        <div className='img-topico'>
                            <img src='/images/sair.png'></img>
                            <p>Sair</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}