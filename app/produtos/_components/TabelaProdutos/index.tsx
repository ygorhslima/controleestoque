"use client"
import { useState, useEffect } from 'react'
import '../../../styles/tabelas.css'
import {FaPen, FaTrash} from 'react-icons/fa'

export default function TabelaProdutos(){

    const [produtos, setProdutos] = useState<any[]>([])

    useEffect(() => {
    const dados = localStorage.getItem("produtos");

    // Verifica se existe, se não é a string "undefined" e se não está vazio
    if (dados && dados !== "undefined") {
        try {
            const dadosConvertidos = JSON.parse(dados);
            const listaProdutos = Array.isArray(dadosConvertidos) ? dadosConvertidos : [dadosConvertidos];
            setProdutos(listaProdutos);
        } catch (error) {
            console.error("Erro ao converter produtos do localStorage", error);
            setProdutos([]); // Reseta para evitar quebras
        }
    }
}, []);

    function editarDados(produto:any){ 
        localStorage.setItem("produto_editando", JSON.stringify(produto));
        window.location.reload();
    }

    function deletarDados(indexParaRemover:number){
        const confirmar = window.confirm("Deseja realmente excluir este produto?");
        if(confirmar){
            const novaLista = produtos.find((_,index) => index !== indexParaRemover)
            // 2. Atualiza o estado para refletir na tela
            setProdutos(novaLista);
            
            // 3. Salva a nova lista no localStorage
            localStorage.setItem("produtos", JSON.stringify(novaLista));
        }
    }
  
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
                                    <button className="btn_editar" onClick={()=>{editarDados(dados)}}><FaPen /></button>
                                    <button className="btn_excluir" onClick={()=>deletarDados(index)}><FaTrash /></button>
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
