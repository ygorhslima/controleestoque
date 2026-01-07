"use client"
import '../../../styles/tabelas.css'
import { movimentacoesDto } from '@/backend/movimentacoes/movimentacoes.interface'


interface Props {
  movimentacao: movimentacoesDto[];
  atualizarMovimentacoes: () => void;
}

export default function TabelaMovimentacoes({movimentacao, atualizarMovimentacoes}:Props){

  
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
                       {movimentacao.length > 0 ? (
                            movimentacao.map((mov, index) => (
                                <tr key={index}>
                                    <td>
                                        <i className={`fa-solid ${mov.tipo === 'Entrada' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                                        {mov.tipo.charAt(0).toUpperCase() + mov.tipo.slice(1)}
                                    </td>
                                    <td>{mov.produto.nome}</td>
                                    <td>{mov.quantidade}</td>
                                    <td>{mov.data}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} style={{ textAlign: 'center' }}>Nenhuma movimentação registrada.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
