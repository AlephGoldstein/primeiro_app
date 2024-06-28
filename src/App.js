import MostraNome from "./components/MostraNome"
import { useState } from "react";
function App() {
  const [pessoa, setPessoa] = useState("Professor de TI")
  function handleChangeName(nome){
    setPessoa(nome)
  }
  return (
    <div className="App">
      <h1>Meu primeiro App</h1>
      <h2>{pessoa}</h2>
      <MostraNome pessoa="Allan" idade={178}/>
      <button onClick={() =>handleChangeName("Thalia")}>
        Mudar nome
      </button>

    </div>
  );
}

export default App;

