import type { Request, Response } from 'express';
declare class ProdutosController {
    adicionarProduto(req: Request, res: Response): void;
    removerProduto(req: Request, res: Response): void;
    listarProduto(req: Request, res: Response): void;
    atualizarProduto(req: Request, res: Response): void;
}
declare let Produtos: ProdutosController;
export { Produtos };
//# sourceMappingURL=produtos.controller.d.ts.map