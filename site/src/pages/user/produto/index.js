import './index.scss'

import { useNavigate } from "react-router-dom";

import Cabecalho from '../../../components/header'
import Footer from '../../../components/footer'
import CardCarrinho from '../../../components/CardCarrinho';





export default function Produto(props) {

    const navigate = useNavigate('');

    function AcessoriosPage() {
        navigate("/acessorios")
    }

    function Destaques() {
        navigate("/destaques")
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
        <main className='page-produto'>
            <header className='cabecalho'>
                <Cabecalho />
            </header>
            <section>
                <div>
                    <div>
                        <div>
                            <p>destaques</p>
                        </div>
                        <div>
                            {/*carrosel*/}
                        </div>
                    </div>
                    <div>
                        <div>
                            <img></img>
                        </div>
                        <div>
                            <h2>Camiseta Street</h2>
                            <p>Adidas</p>
                            <p>R$ 129,90</p>
                        </div>
                        <div>
                            <select>
                                <option value="" selected disabled hidden></option>
                                <option value="PP"> PP </option>
                                <option value="P"> P </option>
                                <option value="M"> M </option>
                                <option value="G"> G </option>
                                <option value="GG"> GG </option>
                            </select>

                            <select className='select'>
                                <option value="" selected disabled hidden></option>
                                <option>{props.quantidade}</option>
                            </select>
                        </div>
                        <div>
                            <p>{props.situacao}</p>
                        </div>
                            <div>
                                <button className='botao-adicionar'>adicionar ao carrinho</button>
                                <div>
                                    <button><img src='/images/curtidos.png'></img> </button>
                                </div>
                            </div>
                        <div>
                            <p>tabela de medidas</p>
                        </div>

                        <div>
                            <p>Calcular frete e entrega</p>
                            <input type='text'></input>
                            <button className='botao-calcular'>calcular</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}