import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Conteudo from "./components/Conteudo";


export default function App() {

  //area declarativa
  let meuNome = "Nicolas";

  return (
    // area imperativa
    <div className="container">

        <Cabecalho nomeDoUsuario={meuNome}>
          Hellow World!
        </Cabecalho>

        <Conteudo/>
        <Rodape/>
      
      

    </div>
  )
}
