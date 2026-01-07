import { movimentacoesDto } from "./movimentacoes/movimentacoes.interface";
import { dadosProdutos } from "./dadosProdutos";

// Função auxiliar para facilitar a criação de datas de "hoje" com horários diferentes
const hoje = (horas: number, minutos: number) => {
  const data = new Date();
  data.setHours(horas, minutos, 0, 0);
  return data;
};

const dadosMovimentacoes: movimentacoesDto[] = [
  {
    id: 1,
    tipo: "Saída",
    produto: dadosProdutos[0],
    quantidade: 2,
    data: hoje(8, 30),
  },
  {
    id: 2,
    tipo: "Entrada",
    produto: dadosProdutos[1],
    quantidade: 20,
    data: hoje(9, 15),
  },
  {
    id: 3,
    tipo: "Saída",
    produto: dadosProdutos[4],
    quantidade: 1,
    data: hoje(9, 45),
  },
  {
    id: 4,
    tipo: "Saída",
    produto: dadosProdutos[14],
    quantidade: 5,
    data: hoje(10, 0),
  },
  {
    id: 5,
    tipo: "Entrada",
    produto: dadosProdutos[28],
    quantidade: 10,
    data: hoje(10, 20),
  },
  {
    id: 6,
    tipo: "Saída",
    produto: dadosProdutos[5],
    quantidade: 3,
    data: hoje(10, 50),
  },
  {
    id: 7,
    tipo: "Saída",
    produto: dadosProdutos[22],
    quantidade: 2,
    data: hoje(11, 15),
  },
  {
    id: 8,
    tipo: "Entrada",
    produto: dadosProdutos[10],
    quantidade: 15,
    data: hoje(11, 40),
  },
  {
    id: 9,
    tipo: "Saída",
    produto: dadosProdutos[19],
    quantidade: 4,
    data: hoje(13, 10),
  },
  {
    id: 10,
    tipo: "Saída",
    produto: dadosProdutos[2],
    quantidade: 10,
    data: hoje(13, 45),
  },
  {
    id: 11,
    tipo: "Entrada",
    produto: dadosProdutos[8],
    quantidade: 2,
    data: hoje(14, 0),
  },
  {
    id: 12,
    tipo: "Saída",
    produto: dadosProdutos[16],
    quantidade: 1,
    data: hoje(14, 25),
  },
  {
    id: 13,
    tipo: "Saída",
    produto: dadosProdutos[25],
    quantidade: 12,
    data: hoje(14, 50),
  },
  {
    id: 14,
    tipo: "Entrada",
    produto: dadosProdutos[29],
    quantidade: 5,
    data: hoje(15, 10),
  },
  {
    id: 15,
    tipo: "Saída",
    produto: dadosProdutos[3],
    quantidade: 2,
    data: hoje(15, 30),
  },
  {
    id: 16,
    tipo: "Saída",
    produto: dadosProdutos[20],
    quantidade: 8,
    data: hoje(16, 0),
  },
  {
    id: 17,
    tipo: "Entrada",
    produto: dadosProdutos[12],
    quantidade: 7,
    data: hoje(16, 20),
  },
  {
    id: 18,
    tipo: "Saída",
    produto: dadosProdutos[26],
    quantidade: 3,
    data: hoje(16, 45),
  },
  {
    id: 19,
    tipo: "Saída",
    produto: dadosProdutos[7],
    quantidade: 1,
    data: hoje(17, 10),
  },
  {
    id: 20,
    tipo: "Entrada",
    produto: dadosProdutos[21],
    quantidade: 20,
    data: hoje(17, 30),
  },
];

export { dadosMovimentacoes };