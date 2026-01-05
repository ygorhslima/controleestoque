"use client";

import { useState, FormEvent } from "react";

export default function FormMovimentacoes() {
  // Estados para capturar o que o usuário digita/seleciona
  const [tipo, setTipo] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [quantidade, setQuantidade] = useState("");

  return (
    <form>
      <h2>Nova Movimentação</h2>

      <div className="container-input">
        <label>Tipo</label>
        <select required value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Selecione o tipo</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </div>

      <div className="container-input">
        <label>Produto</label>
        <select
          required
          value={produtoSelecionado}
          onChange={(e) => setProdutoSelecionado(e.target.value)}
        >
          <option value="">Selecione o Produto</option>
        </select>
      </div>

      <div className="container-input">
        <label>Quantidade</label>
        <input
          type="number"
          min={1}
          required
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
      </div>

      <div className="container-form-button">
        <button className="btn_criar" type="submit">
          Registrar
        </button>
      </div>
    </form>
  );
}
