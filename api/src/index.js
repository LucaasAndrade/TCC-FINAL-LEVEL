
import 'dotenv/config';

import AdmController from './controller/AdmController.js';
import ProdutoControlLer from './controller/ProdutoController.js';

import adminCategoriaController from './controller/admin/categoriaController.js';

import loginClienteController from './controller/loginClienteController.js'




import express from 'express';
import cors from 'cors';
   
const server = express();
server.use(cors());
server.use(express.json());


server.use(AdmController);
server.use(ProdutoControlLer);
server.use(loginClienteController);
server.use(adminCategoriaController);



server.listen(process.env.PORT, 
                            () => console.log(`API ON PORTA: ${process.env.PORT}`));