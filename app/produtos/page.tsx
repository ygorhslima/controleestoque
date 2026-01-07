/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { produtosDto } from "@/backend/produtos/produtos.interface";
import FormProdutos from "./_components/FormProdutos";
import TabelaProdutos from "./_components/TabelaProdutos";
import { useCallback, useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState<produtosDto[]>([]);
  const [produtoParaEditar, setProdutoParaEditar] = useState<produtosDto | null>(null);

  //função para buscar dados do backend
  const carregarProdutos = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3030/produtos");
      const dados = await res.json();
      setProdutos(dados);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }, []);

  useEffect(() => {
    carregarProdutos();
  }, [carregarProdutos]);

  return (
    <>
      <FormProdutos
        aoCadastrar={carregarProdutos}
        produtoParaEditar={produtoParaEditar}
        limparEdicao={() => setProdutoParaEditar(null)}
      />
      <TabelaProdutos
        produtos={produtos}
        atualizar={carregarProdutos}
        aoClicarEditar={(p) => setProdutoParaEditar(p)}
      />
    </>
  );
}
