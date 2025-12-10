/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { prisma } from '@/prisma/lib/prisma'; // Altere para importar a instância singleton
import { PrismaClient } from '@prisma/client/extension'
import '../../../styles/tabelas.css'
import {FaPen, FaTrash} from 'react-icons/fa'

const prisma = new PrismaClient()

export default async function TabelaProdutos(){
    
    // busca de dados no mysql
    const produtos = await prisma.produto.findMany({
        orderBy:{
            nome:"asc"
        }
    });
    console.log(produtos)
   
    return(
        <div className="tabela-container">
            <div className="tabela-scroll">
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Categoria</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(({id,nome,categoria,quantidade_em_estoque,preco}:any)=>(
                            <tr key={id}>
                                <td>{nome}</td>
                                <td>{categoria}</td>
                                <td>{quantidade_em_estoque}</td>
                                <td>R$ {preco.toFixed(2)}</td>
                                <button className="btn_editar"><FaPen/></button>
                                <button className="btn_excluir"><FaTrash/></button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
