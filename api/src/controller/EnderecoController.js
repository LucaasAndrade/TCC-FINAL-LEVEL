
import  {Router} from 'express';
import { salvar,listar } from "../repository/EnderecoRepository.js";
const server = Router();


server.get('/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const r = await listar(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/usuario/:id/endereco',async(req,resp)=>{
  
    try {
    const id = req.params.id;
    const endereco =req.body;
    
    const r = await salvar(id,endereco);
    resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


export default server;