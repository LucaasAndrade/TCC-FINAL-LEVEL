import './index.scss'




export default function ModalVerificado({ exibir, fechar }) {


    return (


        <div className='comp-modal-verificado'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>

                    <buttton className='fechar' onClick={fechar}> x </buttton>

                    <p className='p-verificado'>seu pedido foi concluído com sucesso</p>
                    <img className='img-verificado' src='/images/confere.png'></img>
                
                </div>
            </div>
        </div>
    )
}