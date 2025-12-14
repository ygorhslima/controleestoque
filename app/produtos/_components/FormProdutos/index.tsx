"use client"
import '../../../styles/formularios.css'
import { useState } from "react";

export default function FormProdutos(){
    
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [status,setStatus] = useState("");

  return(
      <form>
        <h2>Novo Produto</h2>
        
        <div className="container-input">
          <label htmlFor="txt_nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="txt_nome"
            value={nome} 
            onChange={(e)=> setNome(e.target.value)}
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
            onChange={(e)=> setCategoria(e.target.value)}
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
            onChange={(e)=> setQuantidade(e.target.value)}
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
            onChange={(e)=> setPreco(e.target.value)}
            required
          />
        </div>

        <div className="container-form-button">
          <button type="submit" className="btn_criar">Criar</button>
        </div>

        {status && <p>{status}</p>}
      </form>
    )
}