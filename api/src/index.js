
import 'dotenv/config';

import AdmController from './controller/AdmController.js';
import ProdutoControlLer from './controller/ProdutoController.js';
import UsuaController from './controller/UsuaController.js';
import EnderecoController from  './controller/EnderecoController.js';
import pedidoController from  './controller/pedidoController.js';


import express from 'express';
import cors from 'cors';
   
const server = express();
server.use(cors());
server.use(express.json());


server.use(AdmController);
server.use(ProdutoControlLer);
server.use(UsuaController);
server.use(EnderecoController);
server.use(pedidoController);

server.use('/storage/produto', express.static('storage/produto'));


server.listen(process.env.PORT, 
                            () => console.log(`API ON PORTA: ${process.env.PORT}`));