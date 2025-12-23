"use client"

import { useState, useEffect, FormEvent } from 'react';

export default function FormMovimentacoes() {
    const [produtos, setProdutos] = useState([]);
    
    // Estados para capturar o que o usuário digita/seleciona
    const [tipo, setTipo] = useState('');
    const [produtoSelecionado, setProdutoSelecionado] = useState('');
    const [quantidade, setQuantidade] = useState(0);

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('produtos') || '[]');
        setProdutos(dados);
    }, []);

    const handleSalvar = (e:FormEvent) => {
        e.preventDefault();

        const novaMovimentacao = {
            tipo: tipo, // "entrada" ou "saida"
            produto: produtoSelecionado,
            quantidade: quantidade,
            data: new Date().toLocaleString('pt-BR') // Gera a data/hora atual
        };

        // Pega as movimentações que já existem ou cria um array vazio
        const movimentacoesAtuais = JSON.parse(localStorage.getItem('movimentacoes') || '[]');
    
        // Adiciona a nova
        const listaAtualizada = [...movimentacoesAtuais, novaMovimentacao];        
        localStorage.setItem('movimentacoes', JSON.stringify(listaAtualizada));

        // Dispara um evento avisando que o storage mudou
        window.dispatchEvent(new Event('storageUpdated'));
        alert("Movimentação registrada!");
        // Opcional: limpar os campos após salvar
    };

    return (
        <form onSubmit={handleSalvar}>   
            <h2>Nova Movimentação</h2>
        
            <div className='container-input'>
                <label>Tipo</label>
                <select 
                    required 
                    value={tipo} 
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="">Selecione o tipo</option>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
            </div>
            
            <div className='container-input'>
                <label>Produto</label>
                <select 
                    required 
                    value={produtoSelecionado} 
                    onChange={(e) => setProdutoSelecionado(e.target.value)}
                >
                    <option value="">Selecione o Produto</option>
                    {produtos.map((p, index) => (
                        <option key={index} value={p.nome}>{p.nome}</option>
                    ))}
                </select>
            </div>
            
            <div className='container-input'>
                <label>Quantidade</label>
                <input 
                    type="number" 
                    min={1} 
                    required 
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                />
            </div>

            <div className='container-form-button'>
                <button className='btn_criar' type="submit">Registrar</button>
            </div>
        </form>
    );
}