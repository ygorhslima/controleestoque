"use client";
import { produtosDto } from "@/backend/produtos/produtos.interface";
import "../../../styles/formularios.css";
import { FormEvent, useEffect, useState } from "react";

interface Props {
  aoCadastrar: () => void;
  produtoParaEditar?: produtosDto | null;
  limparEdicao: () => void;
}

export default function FormProdutos({
  aoCadastrar,
  produtoParaEditar,
  limparEdicao,
}: Props) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    if (produtoParaEditar) {
      setNome(produtoParaEditar.nome);
      setCategoria(produtoParaEditar.categoria);
      setQuantidade(String(produtoParaEditar.quantidade));
      setPreco(String(produtoParaEditar.preco));
    }
  }, [produtoParaEditar]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const produtoFinal = {
      nome,
      categoria,
      quantidade: Number(quantidade),
      preco: Number(preco),
    };

    // LÓGICA B: Definir se a URL tem ID (PUT) ou não (POST)
    const url = produtoParaEditar
      ? `http://localhost:3030/produtos/${produtoParaEditar.id}`
      : "http://localhost:3030/produtos";

    const metodo = produtoParaEditar ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produtoFinal),
      });

      if (response.ok) {
        aoCadastrar(); // Recarrega a lista
        resetarFormulario();
      }
    } catch (error) {
      console.error(error);
    }
  }

  function resetarFormulario() {
    setNome("");
    setCategoria("");
    setQuantidade("");
    setPreco("");
    limparEdicao(); // Importante: limpa o estado no componente pai
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{produtoParaEditar ? "Editar Produto" : "Criar Produto"}</h2>

      <div className="container-input">
        <label htmlFor="txt_nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="txt_nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div className="container-input">
        <label htmlFor="txt_categoria">Categoria</label>
        <input
          type="text"
          name="categoria"
          id="txt_categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </div>

      <div className="container-input">
        <label htmlFor="txt_quantidade">Quantidade</label>
        <input
          type="number"
          name="quantidade"
          id="txt_quantidade"
          min={0}
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        />
      </div>

      <div className="container-input">
        <label htmlFor="txt_preco">Preço</label>
        <input
          type="number"
          name="preco"
          id="txt_preco"
          min={0}
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
      </div>

      <div className="container-form-button">
        <button type="submit" className="btn_criar">
          {produtoParaEditar ? "Editar" : "Criar"}
        </button>

        {produtoParaEditar && (
          <button type="button" onClick={resetarFormulario} className="btn_cancelar">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
