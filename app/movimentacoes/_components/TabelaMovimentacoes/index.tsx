import '../../../styles/tabelas.css'
export default function TabelaMovimentacoes(){
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
                        <tr>
                            <td><i className='fa-solid fa-arrow-up'></i>Entrada</td>
                            <td>Notebook Dell Inspiron</td>
                            <td>10</td>
                            <td>2025-11-06 12:15</td>
                        </tr>
                        <tr>
                            <td><i className='fa-solid fa-arrow-down'></i>Saída</td>
                            <td>Mouse Logitech MX</td>
                            <td>5</td>
                            <td>2025-11-06 12:15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
