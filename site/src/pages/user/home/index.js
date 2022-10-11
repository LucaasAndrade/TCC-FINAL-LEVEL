import './index.scss'

import { useNavigate } from "react-router-dom";

import Cabecalho from '../../../components/header'
import Footer from '../../../components/footer'
import CarroselDestaques from '../../../components/carrosel'
import CarroselMarcas from '../../../components/carroselmarcas'
import AcessoriosHome from '../../../components/acessoriosHome'




export default function Home() {

    
    /*function inicialModal(modalID) {
        if(localStorage.fecharModal !== modalID){
        const modal = document.getElementById(modalID);
            if(modal) {
                modal.classList.add('mostrar');
                modal.addEventListener('click', (e) => {
                    if(e.target.id == modalID || e.target. className == 'fechar') {
                    modal.classList.remove('mostrar');
                    localStorage.fecharModal = modalID;
                    }
                });
            }
        }
    }

    const perfil = document.querySelector('.elementos-usuario');
    perfil.addEventListener('click', () => inicialModal('modal-promocao'));*/
                




    const navigate = useNavigate('');
    
    function AcessoriosPage() {
        navigate ("/acessorios")
    }
    
    function Destaques() {
        navigate ("/destaques")
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
        <main id='page-lading'>
            <header className='cabecalho'>
                <Cabecalho />
            </header>
            <section className='fundo-home'>
                <div>
                    <img className='imagem-inicio' src='/images/imagem-inicio.png' alt='imagem-principal' />
                </div>
            </section>
            <section>
                <div>
                    <div className='acessorios-info'>
                        <button className='botao-acessorios'>DESTAQUES</button>
                        <h5 className='p-ver-mais' onClick={Destaques}>Ver mais >> </h5> 
                    </div>
                    <div>
                        <CarroselDestaques />
                    </div> 
                </div>           
            </section>
            <section className='categorias'>
                <div className='fundo-categorias'>
                    <button className='p-categoria'>COMPRE POR CATEGORIA</button>
                </div>
                <div className='img-categoria'>
                    <img src='/images/feminino.png' alt='img-feminino' onClick={Feminino}/>
                    <img className='imagem-cate' src='/images/masculino1.png' alt='img-masculino' onClick={Masculino} />
                    <img className='imagem-cate' src='/images/infantil.png' alt='img-infantil' onClick={Infantil} />
                </div>
            </section>
            <section className='fundo-acessorios'>
                <div className='acesso'>
                    <div className='acessorios-info'>
                        <button className='botao-acessorios'>ACESSÓRIOS</button>
                        <h5 className='p-ver-mais' onClick={AcessoriosPage}>Ver mais >> </h5> 
                    </div>
                    <div className='produtos'>
                        <AcessoriosHome imagem='/images/acesso1.png' nome='Tênis Vans Masculino' preco='R$ 299,90' />
                        <AcessoriosHome imagem='/images/acesso4.png' nome='Tênis Adidas Masculino' preco='R$ 400,00' />
                        <AcessoriosHome imagem='/images/acesso2.png' nome='Tênis Fila Masculino' preco='R$ 220,00' />
                        <AcessoriosHome imagem='/images/acesso3.png' nome='Boné Adidas Masculino' preco='R$ 69,00' />
                        <AcessoriosHome imagem='/images/acesso5.png' nome='Boné Adidas Masculino' preco='R$ 69,00' />
                    </div> 
                </div>           
            </section>
            <section className='fundo-marcas'>
                <div>
                    <div className='div-marcas'>
                        <p className='p-marcas'>MARCAS</p>
                    </div>
                    <div>
                        <CarroselMarcas />
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>


            <section id='modal-info-perfil' className='modal-container'>
                <div className='modal'>
                    <button className='fechar'> X </button>
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
            </section>
        </main>
    )
}