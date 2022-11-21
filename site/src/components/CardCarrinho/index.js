import './index.scss'
import '../../common/common.scss'
import { API_URL } from '../../api/config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Storage from 'local-storage';


export default function CardCarrinho({item: {produto:{info,tamanhos,imagem},qtd},  removerItem, carregarCarrinho}) {
    const[qtdProduto,setQtdProduto] = useState(qtd);

    function remover() {
        removerItem(info.id);
    }



    function calcularSubtotal() {
        const subtotal = qtdProduto * info.preco;
        return subtotal;
    }

    function exibirImagem() {
        if (imagem.length > 0)
        
            return `${API_URL}/${imagem[0]}`
            
        else 
            return `/images/imagem-nao-encontrada.jfif`;
    }

    function alterarQuantidade(novaQtd) {
        setQtdProduto(novaQtd);
        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }
    
    function formatarPreco(preco) {
        preco = String(preco);
        for (let i = 0; i <= preco.length; i++){
          if (preco[i] == ',' || preco[i] == '.') {
            return preco;
          }
          else {
            return preco + ',00'
          }
        }
    
      }
    
    return (
        <main className='page-card-carrinho'>
            <div className='cartao-carrinho'>
                <div className='imagem-carrinho'>
                    <img src={exibirImagem()}/>
                </div>
                <div className='info-card'>
                    <div>
                        <p className='card-nome'>{info.produto}</p>
                        <p className='card-marca'>{info.marca}</p>
                        <p className='card-preco'>{formatarPreco(info.preco)}</p>
                    </div>
                    <div>
                        <select>
                            <option value="" selected disabled hidden> tamanhos </option>
                            {tamanhos.map(item =>
                                <option> { item }</option>
                            )}
                        </select>

                        <select className='select' onChange={e => alterarQuantidade(e.target.value)}  value ={qtdProduto} >
                            <option selected disabled hidden> quantidade </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                {/* <div className='subtotal'>
                        <div>Subtotal</div>
                        <div>R$ {calcularSubtotal()}</div>
                </div> */}
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