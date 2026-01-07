import { Request, Response } from "express";
import { dadosMovimentacoes } from "../dadosMovimentacoes";
import { movimentacoesDto } from "./movimentacoes.interface";

class MovimentacoesController {
  // Criar: Adiciona um ID incremental simples
  criarMovimentacao(req: Request, res: Response) {
    try {
      const { tipo, produto, quantidade, data } = req.body;
      const novoId =
        dadosMovimentacoes.length > 0
          ? (dadosMovimentacoes[dadosMovimentacoes.length - 1].id || 0) + 1
          : 1;

      const novaMovimentacao: movimentacoesDto = {
        id: novoId,
        tipo,
        produto,
        quantidade,
        data,
      };

      dadosMovimentacoes.push(novaMovimentacao);

      return res
        .status(201)
        .json({ mensagem: "sucesso", movimentacao: novaMovimentacao });
    } catch (error) {
      return res.status(500).json({ mensagem: "erro ao criar produto" });
    }
  }

  mostrarTodasMovimentacoes(req: Request, res: Response) {
    res.status(200).json(dadosMovimentacoes)
  }

  // Buscar um por ID
  mostrarUmaMovimentacao(req: Request, res: Response) {}

  // Atualizar por ID
  atualizarMovimentacao(req: Request, res: Response) {}

  // Remover por ID
  removerMovimentacao(req: Request, res: Response) {}
}

const movimentacoesController = new MovimentacoesController();
export { movimentacoesController };
