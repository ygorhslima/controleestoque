import { Request, Response } from "express";
import { dadosProdutos } from "../dadosProdutos";
import { produtosDto } from "./produtos.interface";

class ProdutosController {
  
  // Criar: Adiciona um ID incremental simples
  criarProduto(req: Request, res: Response) {
    try {
      const { nome, categoria, preco, quantidade } = req.body;
      const novoId = dadosProdutos.length > 0 ? (dadosProdutos[dadosProdutos.length - 1].id || 0) + 1 : 1;

      const novoProduto: produtosDto = { id: novoId, nome, categoria, preco, quantidade };
      dadosProdutos.push(novoProduto);

      return res.status(201).json({ mensagem: "Sucesso", produto: novoProduto });
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro ao criar produto" });
    }
  }

  mostrarTodosProdutos(req: Request, res: Response) {
    res.status(200).json(dadosProdutos);
  }

  // Buscar um por ID
  mostrarUmProduto(req: Request, res: Response) {
    const { id } = req.params;
    const produto = dadosProdutos.find(p => p.id === Number(id));

    if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
    return res.status(200).json(produto);
  }

  // Atualizar por ID
  atualizarProduto(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, categoria, preco, quantidade } = req.body;
    const index = dadosProdutos.findIndex(p => p.id === Number(id));

    if (index === -1) return res.status(404).json({ mensagem: "Produto não encontrado" });

    dadosProdutos[index] = { ...dadosProdutos[index], nome, categoria, preco, quantidade };
    return res.status(200).json({ mensagem: "Atualizado com sucesso", produto: dadosProdutos[index] });
  }

  // Remover por ID
  removerProduto(req: Request, res: Response) {
    const { id } = req.params;
    const index = dadosProdutos.findIndex(p => p.id === Number(id));

    if (index === -1) return res.status(404).json({ mensagem: "Produto não encontrado" });

    dadosProdutos.splice(index, 1);
    return res.status(200).json({ mensagem: "Produto removido com sucesso" });
  }
}

const produtosController = new ProdutosController();
export { produtosController };