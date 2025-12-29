import type {Request, Response} from 'express';
import { IProdutos } from './produtos.interface.js';

let dados: IProdutos[] = [
    { nome: "Smartphone Samsung Galaxy S23", categoria: "Eletrônicos", quantidade: 10, preco: 4500.00 },
    { nome: "Notebook Dell Inspiron", categoria: "Informática", quantidade: 5, preco: 3800.00 },
    { nome: "Fone de Ouvido Sony WH-1000XM5", categoria: "Acessórios", quantidade: 12, preco: 1900.00 },
    { nome: "Monitor LG UltraWide 29'", categoria: "Informática", quantidade: 8, preco: 1200.00 },
    { nome: "Cadeira Gamer ThunderX3", categoria: "Móveis", quantidade: 4, preco: 1100.00 },
    { nome: "Teclado Mecânico Logitech G Pro", categoria: "Periféricos", quantidade: 15, preco: 650.00 },
    { nome: "Mouse Gamer Razer DeathAdder", categoria: "Periféricos", quantidade: 20, preco: 350.00 },
    { nome: "Smartwatch Apple Watch Series 8", categoria: "Eletrônicos", quantidade: 7, preco: 3200.00 },
    { nome: "Kindle Paperwhite 16GB", categoria: "Leitura", quantidade: 25, preco: 750.00 },
    { nome: "Câmera Canon EOS Rebel T7", categoria: "Fotografia", quantidade: 3, preco: 2800.00 },
    { nome: "Console PlayStation 5", categoria: "Games", quantidade: 6, preco: 4200.00 },
    { nome: "SSD Kingston 1TB NVMe", categoria: "Hardware", quantidade: 30, preco: 450.00 },
    { nome: "Roteador TP-Link Wi-Fi 6", categoria: "Redes", quantidade: 10, preco: 580.00 },
    { nome: "Carregador Portátil Anker 20000mAh", categoria: "Acessórios", quantidade: 18, preco: 290.00 },
    { nome: "Caixa de Som JBL Flip 6", categoria: "Áudio", quantidade: 14, preco: 700.00 }
];

class ProdutosController{

    public adicionarProduto(req:Request, res:Response):void{

    }

    public removerProduto(req:Request,res:Response):void{

    }

    public listarProduto(req:Request, res:Response):void{

    }
    
    public atualizarProduto(req:Request, res:Response):void{

    }
}

let Produtos = new ProdutosController();

export {Produtos}