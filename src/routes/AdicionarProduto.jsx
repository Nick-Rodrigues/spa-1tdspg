import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import styles from './AdicionarProdutos.module.css';

export default function AdicionarProduto() {
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault();
        const id = ListaProdutos.length + 1
        
        ListaProdutos.push({
            id,
            nome : event.target.nome.value,
            desc : event.target.desc.value,
            preco: event.target.preco.value,
            img : "https://picsum.photos/200/300"
        })
        navigate("/produtos")
        console.log(ListaProdutos.length)
        
    }

  return (
    <>
        <form onSubmit={handleSubmit} className={styles.formularioadd}>
        <fieldset>
            <legend>Adicionar Produto</legend>
                    <div>
                        <label htmlFor="idProduto">Nome Produto:</label>
                        <input type="text" name="nome" id="idProduto"/>
                    </div>
                    <div>
                        <label htmlFor="idProduto">Preço produto:</label>
                        <input type="text" name="preco" id="idPreco"/>
                    </div>
                    <div>
                        <label htmlFor="idProduto">Descrição produto:</label>
                        <input type="text" name="desc" id="idDesc"/>
                    </div>
                    <div>
                        <button type="submit">Adicionar</button>
                    </div>
        </fieldset>
        </form>
    </>
  )
}
