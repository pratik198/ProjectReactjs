function PokemonThumbnail({ pokemon }) {
    return (
      <div className={"thumb-container " + `${pokemon.type}`}>
        <div className="number">#{pokemon.id}</div>
        <img src={pokemon.image} alt={pokemon.name} />
        <div className="detail-wrapper">
          <h3>{pokemon.name}</h3>
          <p>Type: {pokemon.type}</p>
        </div>
      </div>
    );
  }
  
  export default PokemonThumbnail;
  