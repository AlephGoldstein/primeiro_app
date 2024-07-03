import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você poderia enviar os dados para algum lugar, exibir, etc.
    console.log(`Nome: ${nome}, Email: ${email}, Idade: ${idade}`);
  };

  return (
    <div className="container container-light bg-light d-flex justify-content-between">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              aria-describedby="emailHelp"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="idade" className="form-label">
              Idade
            </label>
            <input
              type="number"
              className="form-control"
              id="idade"
              aria-describedby="emailHelp"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>

        <div>
          <h1>{nome}</h1>
          <h1>{email}</h1>
          <h1>{idade}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
