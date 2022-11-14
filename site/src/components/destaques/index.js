import './index.scss'


export default function ComponenteDestaques(props) {

    return (
      <main className='destaques-home-page'>
        <div className='cartao-produto'>
            <img className='imagem' src= {props.imagem} />
            <div>
                <div className='info'>
                    <p> nome {props.produto}</p>
                    <p> R$ {props.preco}  </p>
                </div>
            </div>
        </div>
    </main>
    )
}