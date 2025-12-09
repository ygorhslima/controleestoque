import Link from 'next/link'
import './header.css'

export default function Header(){
    return(
        <aside>
            <h2>SysControl</h2>
            <hr />
            <div className="div-links">
                <Link href={"/"} className="links"> 
                    <i className="fa-solid fa-home"></i>
                    <span>Início</span>
                </Link>
                
                <Link href={"/produtos"} className="links">
                    <i className="fa-solid fa-box"></i>
                    <span>Produtos</span>
                </Link>
                
                <Link href={"/movimentacoes"} className="links">
                    <i className="fa-solid fa-arrows"></i>
                    <span>Movimentações</span>
                </Link>
            </div>
        </aside>
    )
}