function ItemFilme({ titulo, ano }) {
  return (
    <article className="item-filme">
      <h3>{titulo}</h3>

      {ano && <p>Ano: {ano}</p>}
    </article>
  );
}

export default ItemFilme;
