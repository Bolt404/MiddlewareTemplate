import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

dotenv.config({ path: 'config/middleware.env' });

const routes = express();

routes.use(cors());
routes.use(express.static('public'));

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));


import { CRUDPersons } from '../1_endpoints/CRUDPersons.js';
import { CRUDProduct } from '../1_endpoints/CRUDProducts.js';


// Vores (eneste) endpoint som der kan postes til...
routes.post('/api/products',  (req:any,res:any) => {
   return CRUDProduct.insert(req,res);
});

routes.post('/api/persons', (req:any,res:any) => {
    return CRUDPersons.insert(req,res);
})


// Samler alle andre routes op...
routes.get('*', (req:any,res:any) =>{
     return res.status(404).send('no such route');
});

export {routes}

