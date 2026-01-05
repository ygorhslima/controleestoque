"use client"
import '../../../styles/formularios.css'
import { FormEvent, useState } from "react";

interface Props {
  aoCadastrar: () => void;
}

export default function FormProdutos({aoCadastrar}:Props){
    
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  async function handleSubmit(e:FormEvent){
    e.preventDefault();
    const novoProduto = {
      nome,
      categoria,
      quantidade:Number(quantidade),
      preco:Number(preco)
    }

    try {
      const response = await fetch("http://localhost:3030/produtos",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(novoProduto),
      })

      if(response.ok){  
        aoCadastrar()
        // limpar os campos
        setNome("")
        setCategoria("")
        setQuantidade("")
        setPreco("")
      }else{
        alert("Erro ao cadastar o produto");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Servidor offline ou erro de rede.");
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
      </form>
    )
}