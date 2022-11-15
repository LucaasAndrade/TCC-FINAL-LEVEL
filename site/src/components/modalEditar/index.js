import './index.scss'


export default function ModalEditar({ exibir, fechar }) {


    return (


        <div className='comp-modal-editar'>
            <div className={`modal-editar ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    
                    <buttton className='fechar' onClick={fechar}> x </buttton>
                    
                    <div className='fundo-perfil'>
                        <img className='img-perfil' src='/images/usuario-perfil.png'></img>
                        <h5>5omrenome</h5>
                    </div>
                    <div className='dados'>
                        <div className='div-info-dois'>
                            <p>Eil</p>
                            <p className='p-dois'>lefone</p>
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
                                <img src='/images/sacola-perfil.png'></img>
                                <p>Adicionados ao Carrinho</p>
                            </div>
                        </div>
                        <hr className="linha" />

                        <div className='div-info'>
                            <div className='img-topico'>
                                <img src='/images/editar.png'></img>
                                <p>Editar</p>
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