import Link from 'next/link'

import { FaBox } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaArrowsAlt } from 'react-icons/fa'

import './header.css'

export default function Header(){
    return(
        <aside>
            <h2>SysControl</h2>
            <hr />
            <div className="div-links">
                <Link href={"/"} className="links"> 
                    <FaHome/>
                    <span>Início</span>
                </Link>
                
                <Link href={"/produtos"} className="links">
                    <FaBox/>
                    <span>Produtos</span>
                </Link>
                
                <Link href={"/movimentacoes"} className="links">
                    <FaArrowsAlt/>
                    <span>Movimentações</span>
                </Link>
            </div>
        </aside>
    )
}