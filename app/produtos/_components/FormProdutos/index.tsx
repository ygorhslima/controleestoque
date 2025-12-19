"use client"
import '../../../styles/formularios.css'
import { FormEvent, useState } from "react";

export default function FormProdutos(){
    
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  function EnviarDados(e:FormEvent){
    e.preventDefault()
    
    const dados = {
      id:Date.now(),
      nome: nome,
      categoria:categoria,
      quantidade: quantidade,
      preco: preco,
    }

    let salvo = localStorage.getItem("produtos");
    let listaAntiga = [];

    try{
      let conteudo = JSON.parse(salvo || "[]");
      listaAntiga = Array.isArray(conteudo) ? conteudo : [];      
    }catch(error){
      listaAntiga = [];
    }

    const listaNova = [...listaAntiga, dados];
    localStorage.setItem("produtos",JSON.stringify(listaNova));

    setNome("")
    setCategoria("")
    setQuantidade("")
    setPreco("")

    alert("produto salvo com sucesso")
    window.location.reload()
  }

  return(
      <form onSubmit={EnviarDados}>
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