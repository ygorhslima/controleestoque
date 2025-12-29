"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produtos_controller_1 = require("./produtos/produtos.controller");
const routes = (0, express_1.Router)();
// listar todos os dados dos produtos
routes.get('/produtos', produtos_controller_1.Produtos.listarProduto);
// adicionar um produto
routes.post('/produtos', produtos_controller_1.Produtos.adicionarProduto);
// atualizar um produto
routes.put('/produtos', produtos_controller_1.Produtos.atualizarProduto);
// remover um produto
routes.delete('/produtos', produtos_controller_1.Produtos.removerProduto);
exports.default = routes;
//# sourceMappingURL=routes.js.map