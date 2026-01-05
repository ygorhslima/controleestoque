import express from "express";
import {routerProdutos} from './produtos/produtos.routes'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerProdutos);

export { app };
