import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditarProdutos() {
  document.title = "Editar Produtos";

  const navigate = useNavigate();
  const { id } = useParams();

  const [produtoEditado, setProdutoEditado] = useState({
    id: "",
    nome: "",
    preco: "",
    desc: "",
    img: ""
  });

  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProdutoEditado(data);
      })
      .catch((error) => console.error("Erro:", error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProdutoEditado({ ...produtoEditado, [name]: value });
  };

  const handleEditar = (event) => {
    event.preventDefault();

    const response = fetch(`http://localhost:5000/produtos/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(produtoEditado),
    })

    .then((response)=> console.log(response.status))
    .catch(error => console.log(error));
    navigate("/produtos");
    
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleEditar}>
          <fieldset>
            <legend>Editar produto</legend>
            <div>
              <label htmlFor="idProduto">Nome Produto:</label>
              <input
                type="text"
                name="nome"
                id="idProduto"
                value={produtoEditado.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço Produto:</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                value={produtoEditado.preco}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={produtoEditado.desc}
                onChange={handleChange}
              />
            </div>

            <div>
              <button className="btn">EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}