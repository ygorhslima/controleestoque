import '../../../styles/tabelas.css'
import {FaPen, FaTrash} from 'react-icons/fa'

export default function TabelaProdutos(){
    return(
        <div className="tabela-container">
            <div className="tabela-scroll">
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Categoria</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>nome</td>
                            <td>categoria</td>
                            <td>quantidade</td>
                            <td>preco</td>
                            <td>
                                <button className="btn_editar"><FaPen/></button>
                                <button className="btn_excluir"><FaTrash/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
