"use client"

import '../../../styles/formularios.css'
import { useState } from "react";
import { cadProduto } from '@/app/produtos/_components/FormProdutos/cadProduto'; // importando função do backend

export default function FormProdutos(){
    
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [status,setStatus] = useState("");

  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    setStatus("Processando...");
    const data = {
      nome:nome,
      categoria:categoria,
      quantidade:parseFloat(quantidade),
      preco:parseFloat(preco),
    }

    // vai executar a função de cadProduto como uma função normal
    const result = await cadProduto(data)
    // lida com resultados
    if(result.success){
      setStatus("Cadastro realizado com sucesso");
      // zerando os dados do formulário
      setNome("");
      setCategoria("");
      setQuantidade("");
      setPreco("");
    }else{
      setStatus(`Erro: ${result.message}`);
    }
  }

  return(
      <form onSubmit={handleSubmit}>
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