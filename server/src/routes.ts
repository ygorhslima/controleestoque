import { Router } from "express";
import { Produtos } from "./produtos/produtos.controller";

const routes: Router =  Router();

// listar todos os dados dos produtos
routes.get('/produtos',Produtos.listarProduto);
// adicionar um produto
routes.post('/produtos',Produtos.adicionarProduto);
// atualizar um produto
routes.put('/produtos',Produtos.atualizarProduto);
// remover um produto
routes.delete('/produtos',Produtos.removerProduto);

export default routes;