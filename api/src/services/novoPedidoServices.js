










export async function criarNovoPedido(idUsuario,info){

    let agora = new Date();
    
    return{
        idProduto: info.idProduto,
        idUsuario:idUsuario,
       
        data:agora,
        total:info.total,
        situacao: 'Confirmando Pagamento'
    }
}