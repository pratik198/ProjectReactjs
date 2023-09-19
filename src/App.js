import "./styles.css";
import "./index.css";
import { useState, useEffect } from "react";
import PokemonThumbnail from "./PokemonThumbnail";

export default function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
  );

  async function getAllPokemons() {
    const res = await fetch(url);
    const data = await res.json();
    const pokemonData = data[0];
    setUrl(pokemonData.next);

    async function createPokemonData(pokemonList) {
      let pokemonDataList = [];
      for (let pokemon of pokemonList) {
        const res = await fetch(pokemon.url);
        const data = (await res.json())[0];
        pokemonDataList.push(data);
      }
      setAllPokemons([...allPokemons, ...pokemonDataList]);
    }
    await createPokemonData(pokemonData.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div id="parent">
          <div id="section">
            <div className="content">
              <h2>Pokemon</h2>
              <h2>Pokemon</h2>
            </div>
            <div className="content2">
              <h2>KingDom</h2>
              <h2>KingDom</h2>
            </div>
          </div>
          <div className="app-container">
            <div className="pokemon-container">
              <div className="all-container">
                {allPokemons.map((pokemon) => (
                  <PokemonThumbnail pokemon={pokemon} />
                ))}
              </div>
              <button className="load-more" onClick={() => getAllPokemons()}>
                More Pokemons
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
