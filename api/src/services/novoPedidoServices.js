import { atualizarCupom, buscarCupom } from "../repository/CupomRepository.js";







export async function acharCupom(cod){
   let idCupom = null;

   const cupom = await buscarCupom(cod);
   if(cupom){
      if(cupom.restante >0){
        idCupom = cupom.id;
        await atualizarCupom(cod);
      }
   }
   return idCupom;
}


export async function criarNovoPedido(idUsuario,idCupom,info){

    let agora = new Date();
    
    return{
        idProduto: info.idProduto,
        idUsuario:idUsuario,
        idCupom:idCupom,
        data:agora,
        total:info,
        situacao: 'Confirmando Pagamento'
    }
}