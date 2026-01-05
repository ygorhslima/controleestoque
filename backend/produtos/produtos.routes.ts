import express from 'express'
import { produtosController } from './produtos.controller'

const routerProdutos = express.Router();

routerProdutos.get("/produtos", (req, res) => produtosController.mostrarTodosProdutos(req, res));
routerProdutos.get("/produtos/:id",(req,res) => produtosController.mostrarUmProduto(req,res));
routerProdutos.post("/produtos", (req, res) => produtosController.criarProduto(req, res));
routerProdutos.put("/produtos/:id",(req,res) => produtosController.atualizarProduto(req,res));
routerProdutos.delete("/produtos/:id",(req,res) => produtosController.removerProduto(req,res));

export {routerProdutos}