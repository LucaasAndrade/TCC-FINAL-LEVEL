import './index.scss'
import '../../common/common'




export default function Pesquisar(props) {
    return (
        <main>
            <img src={props.imagem}></img>
            <p>{props.nome}</p>
            <p>{props.preco}</p>
        </main>
    )
}