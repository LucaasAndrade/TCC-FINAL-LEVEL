import './index.scss';
import '../../common/common.scss'




export default function Cabecalho() {

    return (
        <header id='componente-header'>
            <div className='frete'>
                <img src='/images/caminhao.png' alt='caminhao' />
                <p className='frete-p'>FRETE GRÁTIS ACIMA DE R$200,00</p>
            </div>
            <div className='header'>
                <img src='/images/logo.png' alt='logo' />
                <div className='topicos-p'>
                    <p>ACESSÓRIOS</p>
                    <p className='topico'>MASCULINO</p>
                    <p className='topico'>FEMININO</p>
                    <p className='topico'>INFANTIL</p>
                </div>
                <div className="input-pesquisa">
                <input className="pesquisa" type="text" id="lupa" placeholder="O que você está procurando?" />
                            <span id="lupa"></span>
                </div>
            </div> 
        </header>
    )
}