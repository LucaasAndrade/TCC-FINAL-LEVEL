import 'dotenv/config';

import AdmController from './controller/AdmController.js';
import ProdutoControlLer from './controller/ProdutoController.js';

import express from 'express';
import cors from 'cors';
   
const server = express();
server.use(cors());
server.use(express.json());


server.use(AdmController);
server.use(ProdutoControlLer);


server.listen(process.env.PORT, 
                            () => console.log(`API ON PORTA: ${process.env.PORT}`));