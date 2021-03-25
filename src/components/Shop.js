import React, {useState, useEffect} from "react";
import '../App.css';
import {Link} from 'react-router-dom'

function Shop() {

  useEffect (() => {
    fetchItems();
  }, []);

  const [pokemons, setPokemons] = useState([]); //To store an empty array

  const fetchItems = async () => {
    const data = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
    );

    const items = await data.json();
    setPokemons(items.results);
    console.log(items.results);
  }

  const getPokemonId = (pokemonUrl) => {
    var shortPokemonUrl = pokemonUrl.substr(0, pokemonUrl.length-1);
    var n = shortPokemonUrl.lastIndexOf("/");
    return shortPokemonUrl.substr(n+1, shortPokemonUrl.length);
  }

  return (
    <div>
      <h1>Shop Page</h1>

      {/* {pokemons.map(pokemon => (
        <h2 key={pokemon.name}>
          {pokemon.name}
        </h2>
      ))} */}

      {pokemons.map(pokemon => (
        <h2 key={pokemon.name}>
          <Link to={`/shop/${getPokemonId(pokemon.url)}`}>{pokemon.name}</Link>
        </h2>
      ))}

    </div>
  );
}

export default Shop;