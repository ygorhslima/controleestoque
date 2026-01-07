import express from "express";
import cors from 'cors';
import {routerProdutos} from './produtos/produtos.routes'
import { routerMovimentacoes } from "./movimentacoes/movimentacoes.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerProdutos);
app.use(routerMovimentacoes);

export { app };
