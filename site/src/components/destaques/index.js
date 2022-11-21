import './index.scss'


export default function ComponenteDestaques(props) {

    return (
      <main className='destaques-home'>
        <div className='cartao-produto'>
            <img className='imagem' src= {props.imagem} />
            <div>
                <div className='info'>
                    <p className='nome-produto'> {props.produto}</p>
                    <p className='preco-produto'> R$ {props.preco}  </p>
                </div>
            </div>
        </div>
    </main>
    )
}