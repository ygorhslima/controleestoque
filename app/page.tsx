/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [total, setTotal] = useState<number>(0);
  const [estoqueTotal, setEstoqueTotal] = useState<number>(0);
  const [textoMovimentacao, setTextoMovimentacao] = useState<string>("Carregando...");


  // Função para calcular a diferença de tempo amigável
  const formatarTempoRelativo = (dataMovimentacao: string | Date) => {
    const agora = new Date();
    const data = new Date(dataMovimentacao);
    const diferencaEmSegundos = Math.floor((agora.getTime() - data.getTime()) / 1000);

    if (diferencaEmSegundos < 60) return "Agora mesmo";
    
    const minutos = Math.floor(diferencaEmSegundos / 60);
    if (minutos < 60) return `Há ${minutos} min`;
    
    const horas = Math.floor(minutos / 60);
    if (horas < 24) return `Há ${horas} ${horas > 1 ? 's' : ''}`;
    
    return data.toLocaleDateString("pt-BR");
  };

  const carregarDadosDashboard = async () => {
    try {
      // 1. Busca Produtos
      const resProdutos = await fetch("http://localhost:3030/produtos");
      const produtos = await resProdutos.json();
      setTotal(produtos.length);
      setEstoqueTotal(produtos.reduce((acc: number, prod: any) => acc + prod.quantidade, 0));

      // 2. Busca Movimentações
      const resMov = await fetch("http://localhost:3030/movimentacoes");
      const movimentacoes = await resMov.json();

      if (movimentacoes.length > 0) {
        // Ordena para garantir que a primeira é a mais recente
        const ordenadas = movimentacoes.sort((a: any, b: any) => 
          new Date(b.data).getTime() - new Date(a.data).getTime()
        );
        
        const ultima = ordenadas[0];
        const tempoRelativo = formatarTempoRelativo(ultima.data);
        setTextoMovimentacao(`${ultima.tipo} - ${tempoRelativo}`);
      } else {
        setTextoMovimentacao("Sem movimentações");
      }

    } catch (error) {
      console.error("Erro ao buscar dados do dashboard: ", error);
      setTextoMovimentacao("Erro ao carregar");
    }
  };


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
    carregarDadosDashboard();
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
          <p>{textoMovimentacao}</p>
        </div>
      </div>
    </div>
  );
}
