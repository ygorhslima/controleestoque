"use server"; // indica que esse arquivo é para ser executado no servidor

import { PrismaClient } from "@prisma/client/extension";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

interface ProdutoData{
    nome:string;
    categoria:string;
    quantidade:number;
    preco:number;
}

export async function cadProduto(data:ProdutoData){
    if(data.quantidade < 0 || data.preco < 0){
        return {success:false,message:'quantidade e preço devem ser positivos'};
    }
    // acesso ao banco de dados via prisma
    try {
        await prisma.produto.create({
            data:{
                nome:data.nome,
                categoria:data.categoria,
                quantidade_em_estoque:data.quantidade,
                preco:data.preco
            }
        });
        // revalidação do cache
        // isso força a TabelaProdutos a recarregar os dados atualizados
        revalidatePath("/produtos");
        return {success:true,message:'produto Cadastrado com sucesso'};
    } catch (error) {
        console.error("erro ao cadastrar produto: ",error);
        return {success:false,message:'Erro ao cadastrar'};
    }
}
