export default function Home() {
  return (
      <div className='home'>
        <h1>Dashboard</h1>
        <p>Bem-vindo ao SysControl</p>

        <div className="dashboardInfos">
            <div className="infos">
                <h3>Total de produtos</h3>
                <p>156</p>
            </div>
            <div className="infos">
                <h3>Quantidade em Estoque</h3>
                <p>3.847</p>
            </div>
            <div className="infos">
                <h3>Última Movimentação</h3>
                <p>Há 2 horas</p>
            </div>
        </div>
    </div>
  );
}
