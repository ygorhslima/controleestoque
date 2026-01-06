"use client";
import { useEffect, useState } from "react";
import "../../../styles/tabelas.css";
import { FaPen, FaTrash, FaFilter } from "react-icons/fa";
import { produtosDto } from "@/backend/produtos/produtos.interface";

interface Props {
  produtos: produtosDto[];
  atualizar: () => void;
  aoClicarEditar: (produto: produtosDto) => void; // Passo 1: Definir a prop
}

export default function TabelaProdutos({ produtos, atualizar, aoClicarEditar }: Props) {
  const handleExcluir = async (id: number) => {
    if (!confirm("Excluir Produto?")) return;
    await fetch(`http://localhost:3030/produtos/${id}`, { method: "DELETE" });
    atualizar();
  };


  return (
    <div className="tabela-container">
      <div className="tabela-scroll">
      <div>
      </div>
        <table>
          <thead>
            <tr>
              <th>Nome do Produto <button><FaFilter/></button></th>
              <th>Categoria <button><FaFilter/></button></th>
              <th>Quantidade <button><FaFilter/></button></th>
              <th>Preço <button><FaFilter/></button></th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.length > 0 ? (
              produtos.map((dados, index) => (
                <tr key={index}>
                  <td>{dados.nome}</td>
                  <td>{dados.categoria}</td>
                  <td>{dados.quantidade}</td>
                  <td>
                    {dados.preco.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td>
                    <button className="btn_editar" title="Editar" onClick={()=>aoClicarEditar(dados)}>
                      <FaPen />
                    </button>
                    <button
                      onClick={() => dados.id && handleExcluir(dados.id)}
                      className="btn_excluir"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  Nenhum produto encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
