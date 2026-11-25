import ItemFilme from "./ItemFilme";

function ListaFilmes({ filmes }) {
  return (
    <section className="lista-filmes">
      <h2>Filmes disponíveis</h2>

      <div className="filmes">
        {filmes.map((filme, index) => (
          <ItemFilme
            key={filme.id ?? index}
            titulo={filme.titulo ?? filme.nome}
            ano={filme.ano}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaFilmes;
