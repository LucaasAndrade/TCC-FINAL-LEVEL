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
                <img className='logo' src='/images/logoo.png' alt='logo' />
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
                <div className='elementos-usuario'>
                    <img src='/images/perfil.png' alt='perfil' />
                    <img className='elemento-img' src='/images/atendimento.png' alt='atendimento' />
                    <hr className='elemento-img'></hr>
                    <img className='elemento-img' src='/images/sacola.png' alt='sacola' />
                    <img className='elemento-img' src='/images/coracao.png' alt='coracao' />
                </div>
            </div>
        </header>
    )
}