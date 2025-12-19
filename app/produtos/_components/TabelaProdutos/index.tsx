"use client"
import { useState, useEffect } from 'react'
import '../../../styles/tabelas.css'
import {FaPen, FaTrash} from 'react-icons/fa'

export default function TabelaProdutos(){

    const [produtos, setProdutos] = useState<any[]>([])

    useEffect(()=>{
        // obter os dados do localStorage
        const dados = localStorage.getItem("produtos")
        if(dados){
            // transformar de volta para objeto
            const dadosConvertidos = JSON.parse(dados)
            const listaProdutos = Array.isArray(dadosConvertidos) ? dadosConvertidos : [dadosConvertidos]

            setProdutos(listaProdutos)
            console.log(produtos)
        }
    },[])
  
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
                    {
                      produtos.length > 0 ? (
                        produtos.map((dados, index)=>(
                            <tr key={index}>
                                <td>{dados.nome}</td>
                                <td>{dados.categoria}</td>
                                <td>{dados.quantidade}</td>
                                <td>R$ {dados.preco}</td>
                                <td>
                                    <button className="btn_editar"><FaPen /></button>
                                    <button className="btn_excluir"><FaTrash /></button>
                                </td>
                            </tr>
                        ))
                      ):(
                        <tr>
                            <td colSpan={5} style={{ textAlign: 'center' }}>Nenhum produto encontrado.</td>
                        </tr>
                      )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
