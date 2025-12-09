import '../../../styles/formularios.css'
export default function FormMovimentacoes(){
    return(
        <form>   
            <h2>Nova Movimentação</h2>
        
            <div className='container-input'>
                <label>Tipo</label>
                <select required>
                    <option value="">Selecione o tipo</option>
                </select>
            </div>
            
            <div className='container-input'>
                <label>Produto</label>
                <select required>
                    <option value="">Selecione o Produto</option>
                </select>
            </div>
            
            <div className='container-input'>
                <label>Quantidade</label>
                <input type="number" min={0} required/>
            </div>

            <div className='container-form-button'>
                <button className='btn_criar' type="submit">Registrar</button>
            </div>
        </form>
    )
}
