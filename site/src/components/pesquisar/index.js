import './index.scss'
import '../../common/common.scss'




export default function Pesquisar(props) {
    return (
        <main>
            <div>
                <img src={props.imagem} />
                <div>
                    <p>{props.nome}</p>
                    <p>{props.preco}</p>
                </div>
            </div>
        </main>
    )
}