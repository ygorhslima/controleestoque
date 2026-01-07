import express from "express";
import { movimentacoesController } from "./movimentacoes.controller";

const routerMovimentacoes = express.Router();

routerMovimentacoes.get("/movimentacoes", (req, res) =>
  movimentacoesController.mostrarTodasMovimentacoes(req, res)
);
routerMovimentacoes.get("/movimentacoes/:id", (req, res) =>
  movimentacoesController.mostrarUmaMovimentacao(req, res)
);
routerMovimentacoes.post("/movimentacoes", (req, res) =>
  movimentacoesController.criarMovimentacao(req, res)
);
routerMovimentacoes.put("/movimentacoes/:id", (req, res) =>
  movimentacoesController.atualizarMovimentacao(req, res)
);
routerMovimentacoes.delete("/movimentacoes/:id", (req, res) =>
  movimentacoesController.removerMovimentacao(req, res)
);

export { routerMovimentacoes };
