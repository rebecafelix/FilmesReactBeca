import { useEffect, useState } from "react";
import ListaFilmes from "./components/ListaFilmes";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch(
          "http://localhost:3000/api/filmes"
        );

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os filmes.");
        }

        const dados = await resposta.json();

        if (!Array.isArray(dados)) {
          throw new Error("Os dados recebidos são inválidos.");
        }

        setFilmes(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarFilmes();
  }, []);

  return (
    <main className="container">
      <header className="cabecalho">
        <h1>Lista de Filmes</h1>
        <p>Conheça os filmes cadastrados.</p>
      </header>

      {carregando && (
        <p className="mensagem">Carregando filmes...</p>
      )}

      {erro && (
        <p className="mensagem erro">
          {erro}
        </p>
      )}

      {!carregando && !erro && filmes.length === 0 && (
        <p className="mensagem">
          Nenhum filme encontrado.
        </p>
      )}

      {!carregando && !erro && filmes.length > 0 && (
        <ListaFilmes filmes={filmes} />
      )}
    </main>
  );
}

export default App;
