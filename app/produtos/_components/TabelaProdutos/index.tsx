import '../../../styles/tabelas.css'
import {FaPen, FaTrash} from 'react-icons/fa'
let produtos = [
    {
        "id": 1,
        "nome": "Caderno Espiral",
        "categoria": "Papelaria",
        "quantidade_em_estoque": 150,
        "preco": 12.50
    },
    {
        "id": 2,
        "nome": "Caneta Esferográfica Azul",
        "categoria": "Papelaria",
        "quantidade_em_estoque": 500,
        "preco": 2.25
    },
    {
        "id": 3,
        "nome": "Mouse Sem Fio",
        "categoria": "Eletrônicos",
        "quantidade_em_estoque": 45,
        "preco": 65.90
    },
    {
        "id": 4,
        "nome": "Monitor LED 24 polegadas",
        "categoria": "Eletrônicos",
        "quantidade_em_estoque": 18,
        "preco": 899.00
    },
    {
        "id": 5,
        "nome": "Pneu Aro 15",
        "categoria": "Automotivo",
        "quantidade_em_estoque": 72,
        "preco": 350.00
    },
    {
        "id": 6,
        "nome": "Kit de Ferramentas (100 peças)",
        "categoria": "Automotivo",
        "quantidade_em_estoque": 30,
        "preco": 149.99
    },
    {
        "id": 7,
        "nome": "Cadeira Ergonômica Escritório",
        "categoria": "Mobiliário",
        "quantidade_em_estoque": 22,
        "preco": 520.50
    },
    {
        "id": 8,
        "nome": "Luminária de Mesa LED",
        "categoria": "Mobiliário",
        "quantidade_em_estoque": 85,
        "preco": 45.00
    },
    {
        "id": 9,
        "nome": "Teclado Mecânico Gamer",
        "categoria": "Eletrônicos",
        "quantidade_em_estoque": 38,
        "preco": 289.90
    },
    {
        "id": 10,
        "nome": "Resma de Papel A4",
        "categoria": "Papelaria",
        "quantidade_em_estoque": 210,
        "preco": 25.00
    }
]
export default async function TabelaProdutos(){
  
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
                        {produtos.map(({id,nome,categoria,quantidade_em_estoque,preco}:any)=>(
                            <tr key={id}>
                                <td>{nome}</td>
                                <td>{categoria}</td>
                                <td>{quantidade_em_estoque}</td>
                                <td>R$ {preco.toFixed(2)}</td>
                                <button className="btn_editar"><FaPen/></button>
                                <button className="btn_excluir"><FaTrash/></button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
