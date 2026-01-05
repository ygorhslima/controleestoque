"use client";

import { produtosDto } from "@/backend/produtos/produtos.interface";
import FormProdutos from "./_components/FormProdutos";
import TabelaProdutos from "./_components/TabelaProdutos";
import { useCallback, useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState<produtosDto[]>([]);

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
      <FormProdutos aoCadastrar={carregarProdutos}/>
      <TabelaProdutos produtos={produtos} atualizar={carregarProdutos} />
    </>
  );
}
