import './index.scss'
import '../../common/common.scss'




export default function CodigoPromocional() {
    return (
        <main id='page-codigo-promocional'>
            <div className='fundo-codigo'>
                <div className='info-codigo'>
                    <div className="input-pesquisa">
                        <input type="text" id="pesquisa" placeholder="CÓDIGO PROMOCIONAL" />
                    </div>
                    <div>
                        <p className='paragrafo'>Para usar códigos promocionais e/ou fazer compras é necessário ter uma conta.</p>
                    </div>
                </div> 
            </div>
        </main>
    )
}