import './index.scss'
import '../../common/common.scss'




export default function CardCarrinho(props) {
    return (
        <main id='page-card-carrinho'>
            <div className='cartao-carrinho'>
                <div>
                    <img className='imagem-carrinho' src={props.imagem}></img>
                </div>
                <div className='info-card'>
                    <div>
                        <p>{props.nome}</p>
                        <p>{props.marca}</p>
                        <p>{props.preco}</p>
                    </div>
                    <div className='selects'>
                        <select>
                            <option value="" selected disabled hidden></option>
                            <option value="PP"> PP </option>
                            <option value="P"> P </option>
                            <option value="M"> M </option>
                            <option value="G"> G </option>
                            <option value="GG"> GG </option>
                        </select>

                        <select>
                            <option value="" selected disabled hidden></option>
                            <option>{props.quantidade}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <button>X</button>
                    </div>
                    <div className='salvar-tarde'>
                        <img src='/images/curtidos.png'></img>
                        <p>Salvar para mais tarde</p>
                    </div>
                </div>
            </div>
        </main>
    )
}