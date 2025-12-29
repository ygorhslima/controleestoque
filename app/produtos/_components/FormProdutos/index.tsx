"use client"
import '../../../styles/formularios.css'
import { FormEvent, useEffect, useState } from "react";

export default function FormProdutos(){
  // criar um novo id
  const [id, setId] = useState<number | null>(null);
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");


  // efeito para carregar dados quando estiver em modo edição
  useEffect(()=>{
    const editando = localStorage.getItem("produto_editando");
    if(editando){
      const p = JSON.parse(editando);
      setId(p.id);
      setNome(p.nome);
      setCategoria(p.categoria);
      setQuantidade(p.quantidade);
      setPreco(p.preco);
    }
  },[])

  function EnviarDados(e:FormEvent){
    e.preventDefault()
    
    const dados = {
      id:id || Date.now(),
      nome: nome,
      categoria:categoria,
      quantidade: quantidade,
      preco: preco,
    }

    let salvo = localStorage.getItem("produtos");
    let lista = (salvo && salvo !== "undefined") ? JSON.parse(salvo) : [];

    if(id){
      // MODO EDIÇÃO: substitui o item antigo pelo novo no item
      lista = lista.map(item => item.id === id ? dados : item);
      localStorage.removeItem("produto_editando")
    }else{
      lista.push(dados)
    }

    localStorage.setItem("produtos",JSON.stringify(lista));

    setId(null);
    setNome("");
    setCategoria("");
    setQuantidade("");
    setPreco("");

    alert(id ? "Produto atualizado!":"Produto salvo");
    window.location.reload();
  }

  return(
      <form onSubmit={EnviarDados}>
        <h2>{id ? "Editar Produto" : "Novo Produto"}</h2>
        
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
          <button type="submit" className={id ? "btn_editar":"btn_criar"}>
            {id ? "Salvar Alterações" : "Criar"}
          </button>

          {id && (
            <button type='button' onClick={()=>{
              localStorage.removeItem("produto_editando");
              window.location.reload();
            }}
            style={{marginLeft:"10px"}}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    )
}