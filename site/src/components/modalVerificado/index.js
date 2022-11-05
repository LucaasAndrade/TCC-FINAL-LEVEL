import './index.scss'


export default function ModalEndereco({ exibir }) {


    return (


        <div className='comp-modal-verificado'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    <p className='p-verificado'>seu pedido foi concluído com sucesso</p>
                    <img className='img-verificado' src='/images/confere.png'></img>
                
                </div>
            </div>
        </div>
    )
}