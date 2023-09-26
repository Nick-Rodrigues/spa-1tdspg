import { Link } from "react-router-dom"
export default function Cabecalho(){

    return(
        <>
            <header className="cabecalho">
                <h1>SPA</h1>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/adicionar/produto">Adicionar produto</Link></li>
                </ul>
            </header>

        </>
    )
}