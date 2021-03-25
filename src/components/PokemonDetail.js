import React, {useState, useEffect} from "react";
import '../App.css';

function PokemonDetail({match}) {

    useEffect (() => {
        fetchPokemon();
        //console.log(match);
    }, []);

    const [pokemon, setPokemon] = useState([]); //To store an empty array

    const fetchPokemon = async () => {
        const getPokemon = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.params.id}/`
        );

        const pokemon = await getPokemon.json();
        setPokemon(pokemon);
        console.log(pokemon);
    }

    return (
        <div>
            <h1>Pokemon Detail</h1>
            <h2>Name: {pokemon.name}</h2>
            <h2>Order: {pokemon.order}</h2>
            <h2>Base Experience: {pokemon.base_experience}</h2>
        </div>
    );
}

export default PokemonDetail;
