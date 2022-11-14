import './index.scss'
import '../../common/common.scss'

import EstrelasAvaliacao from '../estrelasAvaliacao'


export default function ComponenteAvaliacao(props) {


    return (
        <div className='componente-avaliacao'>
            <div>
                <p className='titulo'>{props.titulo}Uma peça bonita</p>
                <div className='estrelas'>
                    <EstrelasAvaliacao />
                </div>
                <p className='comentario'>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='gostou-avaliacao'>
                <p className='util'>Isto foi útil?</p>
                <div className='gostou'>
                    <img className='gost' src='/images/gostei.png'></img>
                    <span> {props.mais} 0 </span>
                </div>
                <div className='gostou'>
                    <img className='gost' src='/images/nao-gostei.png'></img>
                    <span> {props.menos} 0 </span>
                </div>
            </div>
        </div>
    )
}