import  {Router} from 'express';
import { salvar,listar } from "../repository/EnderecoRepository.js";
import { inserirPagamento, inserirPedido, inserirPedidoItem } from '../repository/pedidoRepository.js';
import { buscarProdutoPorId } from '../repository/ProdutoRepository.js';
import {  criarNovoPedido } from '../services/novoPedidoServices.js';
const server = Router();


server.post('/api/pedido/:idUsuario',async(req,resp) =>{
    try{
        const {idUsuario} = req.params;
        const info = req.body;

       
       
        const novoPedido = await criarNovoPedido (idUsuario,info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento (idPedidoCriado,info.cartao);

        console.log(info)
       
        console.log(novoPedido)
        console.log(idPedidoCriado)

        for (let item of info.produtos) {
            const prod = await buscarProdutoPorId(item.id);
            console.log(prod);
            await inserirPedidoItem(idPedidoCriado, prod.id);
        }

        resp.status(204).send();
    }
        catch (err) {
            console.log(err);
            resp.status(400).send({
                erro: err.message
            })
        }
    })

    export default server;