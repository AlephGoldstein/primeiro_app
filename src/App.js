import MostraNome from "./components/MostraNome"
import { useState } from "react";
function App() {
  const [pessoa, setPessoa] = useState("Professor de TI")
  function handleChangeName(nome){
    setPessoa(nome)
  }
  function returnName(nome){
    setPessoa(nome)
  }
  return (
    <div class = 'container container-light bg-light d-flex justify-content-between' className="App">
      <h1 class='h1'>Meu primeiro App</h1>
      <h2>{pessoa}</h2>
      <MostraNome pessoa="Allan" idade={178}/>
      <button class='btn btn-primary' onClick={() =>handleChangeName("Thalia")}>
        Mudar nome
      </button>
      <button class='btn btn-primary' onClick={() => returnName("Professor de TI")}>
        Voltar nome
      </button>

    </div>
  );
}

export default App;

