import './index.scss'
import '../../common/common.scss'
import { API_URL } from '../../api/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Storage from 'local-storage';


export default function CardCarrinho({item: {produto:{info,categoria,imagem},qtd},  removerItem, carregarCarrinho}) {
    const[qtdProduto,setQtdProduto] = useState(qtd);


    
    function remover() {
        removerItem(info.id);
    }



    function calcularSubtotal() {
        const subtotal = qtdProduto * info.preco;
        return subtotal;
    }

    function exibirImagem(){
        if(imagem.length >0){
        return API_URL + '/' + imagem[0]
    }
    else{
       return ''
    }


}

 function alterarQuantidade(novaQtd) {
            

        setQtdProduto(novaQtd);
        
        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }
    

    return (
        <main id='page-card-carrinho'>
            <div className='cartao-carrinho'>
                <div className='imagem-carrinho'>
                    <img src/>
                </div>
                <div className='info-card'>
                    <div>
                        <p className='card-nome'>{info.produto}</p>
                        <p className='card-marca'>{info.marca}</p>
                        <p className='card-preco'>{info.preco}</p>
                    </div>
                    <div>
                        <select>
                            <option value="" selected disabled hidden></option>
                            <option value="PP"> PP </option>
                            <option value="P"> P </option>
                            <option value="M"> M </option>
                            <option value="G"> G </option>
                            <option value="GG"> GG </option>
                        </select>

                        <select className='select' onChange={e => alterarQuantidade(e.target.value)}  value ={qtdProduto} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className='subtotal'>
                        <div>Subtotal</div>
                        <div>R$ {calcularSubtotal()}</div>
                    </div>
                <div className='excluir-salvar'>
                    <div>
                        <div className='botao'>
                            <button onClick={remover}>X</button>
                        </div>
                        <div className='salvar-tarde'>
                            <img src='/images/curtidos.png'></img>
                            <p>Salvar para mais tarde</p>
                        </div>
                    </div>
                </div>
            </div>
             

        </main>
        
       
    )
}