"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import FormMovimentacoes from "./_components/FormMovimentacoes";
import TabelaMovimentacoes from "./_components/TabelaMovimentacoes";

import { produtosDto } from "@/backend/produtos/produtos.interface";

export default function Movimentacoes() {
  const [movimentacoes, setMovimentacoes] = useState<produtosDto[]>([]);

  //função para buscar dados do backend
  const carregarMovimentacoes = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3030/movimentacoes");
      const dados = await res.json();
      setMovimentacoes(dados);
    } catch (error) {
      console.error("Erro ao carregar as movimentações de produtos:", error);
    }
  }, []);

  useEffect(() => {
    carregarMovimentacoes();
  }, [carregarMovimentacoes]);

  return (
    <>
      <FormMovimentacoes />
      <TabelaMovimentacoes
        movimentacao={movimentacoes}
        atualizarMovimentacoes={carregarMovimentacoes}
      />
    </>
  );
}
