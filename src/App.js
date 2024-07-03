import { useState } from "react";
/*
import MostraNome from "./components/MostraNome"
function App() {
  const [pessoa, setPessoa] = useState("Professor de TI")
  function handleChangeName(nome){
    setPessoa(nome)
  }
  function returnName(nome){
    setPessoa(nome)
  }
  return (
    <div className = 'container container-light bg-light d-flex justify-content-between' classNameName="App">
      <h1 className='h1'>Meu primeiro App</h1>
      <h2>{pessoa}</h2>
      <MostraNome pessoa="Allan" idade={178}/>
      <button className='btn btn-primary' onClick={() =>handleChangeName("Thalia")}>
        Mudar nome
      </button>
      <button className='btn btn-primary' onClick={() => returnName("Professor de TI")}>
        Voltar nome
      </button>

    </div>
  );
}

export default App;
*/
/*
function MeuForms(){
const[nome,setNome] = useState(" ");
const handleChange = (event) => {
  setNome(event.target.value)
};
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Olá ${nome}`)
}
return(
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChange} className="form-control" />
      </label>
      <input type="submit" value="Enviar" className="btn btn-primary" />
    </form>
  </div>
)
}
export default MeuForms;
*/
function App(){
  const [nome, setNome] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [idade, setIdade] = useState(" ");

const handleRegister = (e) =>{
  e.preventDefault();
  console.log({nome},{email},{idade})
  };
return(

  <div className="container container-light bg-light d-flex justify-content-between">

    <div className="col-md-6">

      <form onSubmit={handleRegister}>

        <div className="mb-3">

          <label for="exampleInputEmail1" className="form-label">Nome</label>

          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={nome} onChange={(e) => setNome(e.target.value)} />

        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Idade</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={idade} onChange={(e) => setIdade(e.target.value)} />

        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
        
        <div>

          <h1>{nome}</h1>

          <h1>{email}</h1>

          <h1>{idade}</h1>
        </div>

      </form>
      </div>
      </div>
)
}
export default App