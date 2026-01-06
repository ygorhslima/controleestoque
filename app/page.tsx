/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [total, setTotal] = useState<number>(0);
  const [estoqueTotal, setEstoqueTotal] = useState<number>(0);

  const totalDeProdutos = async () => {
    try {
      const res = await fetch("http://localhost:3030/produtos");
      const produtos = await res.json();
      setTotal(produtos.length);

      const somaEstoque = produtos.reduce(
        (acc: number, prod: any) => acc + prod.quantidade,
        0
      );
      setEstoqueTotal(somaEstoque);
    } catch (error) {
      console.error("erro ao buscar dados do dashboard: ", error);
    }
  };

  useEffect(() => {
    totalDeProdutos();
  }, []);

  return (
    <div className="home">
      <h1>Dashboard</h1>
      <p>Bem-vindo ao SysControl</p>

      <div className="dashboardInfos">
        <div className="infos">
          <h3>Total de produtos</h3>
          <p>{total}</p>
        </div>
        <div className="infos">
          <h3>Quantidade em Estoque</h3>
          <p>{estoqueTotal.toLocaleString("pt-BR")}</p>
        </div>
        <div className="infos">
          <h3>Última Movimentação</h3>
          <p>Há 2 horas</p>
        </div>
      </div>
    </div>
  );
}
