import './index.scss'
import '../../common/common.scss'




export default function DadosPedidos(props) {

    return (
        <main className='dados-pedido'>
            <div className='card'>
                <div className='div-fundo'>
                    <div className='div-info'>
                        <p className='pedido'>PEDIDOS REALIZADO</p>
                        <p className='data-preco'>{props.data}</p>
                    </div>
                    <div className='div-info'>
                        <p className='pedido'>TOTAL</p>
                        <p className='data-preco'>{props.preco}</p>
                    </div>
                    <div className='div-info'>
                        <p className='situacao'>{props.situacao}</p>
                    </div>
                    <div className='div-info'>
                        <img className='lixo' src='/images/lixeira.png'></img>
                    </div>
                </div>
            </div>
        </main>
    )
}