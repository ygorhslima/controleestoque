import { produtosDto } from "../produtos/produtos.interface";

export interface movimentacoesDto{
    id:number;
    tipo:"Entrada"|"Saída";
    produto:produtosDto;
    quantidade:number;
    data:Date;
}