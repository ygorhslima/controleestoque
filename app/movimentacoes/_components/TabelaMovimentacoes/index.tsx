"use client"
import { useState, useEffect } from 'react'
import '../../../styles/tabelas.css'

export default function TabelaMovimentacoes(){

    const [movimentacoes,setMovimentacoes] = useState([]);
    
    useEffect(() => {
        const dadosSalvos = localStorage.getItem('movimentacoes');
        
        if (dadosSalvos) {
            setMovimentacoes(JSON.parse(dadosSalvos));
        }
    }, []);

    return(
        <div className='tabela-container'>
            <div className="tabela-scroll">
                <table>
                    <thead>
                        <tr>
                            <th>tipo</th>
                            <th>produto</th>
                            <th>quantidade</th>
                            <th>data</th>
                        </tr>
                    </thead>
                    <tbody>
                       {movimentacoes.length > 0 ? (
                            movimentacoes.map((mov, index) => (
                                <tr key={index}>
                                    <td>
                                        <i className={`fa-solid ${mov.tipo === 'entrada' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                                        {mov.tipo.charAt(0).toUpperCase() + mov.tipo.slice(1)}
                                    </td>
                                    <td>{mov.produto}</td>
                                    <td>{mov.quantidade}</td>
                                    <td>{mov.data}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center' }}>Nenhuma movimentação registrada.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
