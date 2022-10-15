import '../../common/common.scss'




export default function ProdutosAdm(props) {
    return (
        <main id='page-destaque'>
            <div className='cartao-produto'>
                <div>
                    <img className='imagem' src={props.imagem} />
                </div>
                <div className='info'>
                    <p className='nome-produto'>{props.nome}</p>
                    <p className='preco-produto'>{props.preco}</p>
                    <p className='categoria-produto'>{props.categoria}</p>
                    <div className='lixo'>
                        <img src='/images/lixeira.png' />
                        <img src='/images/lapis.png' />
                    </div>
                </div>
            </div>
        </main>
    )
}