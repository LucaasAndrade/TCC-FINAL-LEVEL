import './index.scss'

import { useNavigate } from "react-router-dom";

import Cabecalho from '../../../components/header'
import Footer from '../../../components/footer'
import CarroselDestaques from '../../../components/carrosel'





export default function Produto() {

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
                
            <section>
                <Footer />
            </section>
        </main>
    )
}