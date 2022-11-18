import { useNavigate } from 'react-router-dom'
import './index.scss'

import 'local-storage'

export default function ModalPerfil({ exibir, fechar }) {

    const navigate = useNavigate('');

    function Editar() {
        navigate('/perfil')
    }

    function carrinho() {
        navigate('/carrinho')
    }

    return (
        <div className='comp-modal-perfil'>
            <div className={`modal-perfil ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    
                    <buttton className='fechar' onClick={fechar}> x </buttton>
                    
                    <div className='fundo-perfil'>
                        <img className='img-perfil' src='/images/usuario-perfil.png'></img>
                        <h5>Nome Sobrenome</h5>
                    </div>
                    <div className='dados'>
                        <div className='div-info-dois'>
                            <p>E-mail</p>
                            <p className='p-dois'>Telefone</p>
                        </div>
                        <hr className="linha" />
                        <div className='div-info'>
                            <div className='img-topico-quatro'>
                                <img className='img-msg' src='/images/mensagens.png' alt='mensagens'></img>
                                <p>Minhas Mensagens</p>
                            </div>
                            <div className='img-topico-tres'>
                                <img className='img-cupom' src='/images/cupons.png' alt='cupons'></img>
                                <p>Meus Cupons</p>
                            </div>
                            <div className='img-topico-dois'>
                                <img src='/images/pedidos.png' alt='Meus Pedidos'></img>
                                <p>Meus Pedidos</p>
                            </div>
                        </div>
                        <hr className="linha" />

                        <div className='div-info'>
                            <div className='img-topico'>
                                <img src='/images/curtidos.png' alt='curtidos'></img>
                                <p>Curtidos</p>
                            </div>
                            <div className='img-topico-dois'>
                                <img src='/images/sacola-perfil.png' onClick={carrinho}/>
                                <p onClick={carrinho}>Adicionados ao Carrinho</p>
                            </div>
                        </div>
                        <hr className="linha" />

                        <div className='div-info'>
                            <div className='img-topico'>
                                <img src='/images/editar.png' onClick={Editar} />
                                <p onClick={Editar}>Editar</p>
                            </div>
                            <div className='img-topico-dois'>
                                <img src='/images/sair.png'></img>
                                <p>Sair</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}