import "./Produtos.css";
import { listaProdutos } from "../components/ListaProdutos";

export default function Produtos() {
    return(
        <>
            <div>
                <h1>Produtos</h1>

                <table className="tabelaProd">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Editar/Excluir</th>
                    </tr>

                    {listaProdutos.map( (produto, indice) => (
                        <tr key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td> <link to={`/editar/produtos/${produto.id}`}>Editar</link> / 
                            <link to={`/excluir/produto/${produto.id}`}>Excluir</link></td>
                        </tr>
                    ))}

                </table>

            </div>
        </>
    )
}


