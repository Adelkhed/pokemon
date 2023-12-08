import {React,useState} from 'react'
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const fetchPokemonList = () =>{
        axios
          .get('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then((response) => {
                const names = response.data.results.map((pokemon) => pokemon.name);
                setPokemonList(names);
            })
          .catch((err) => {
                console.error(err);
            });
    };
  return (
    <div>
        <h1>List Pokemon</h1>
        <button onClick={fetchPokemonList}>Fetch Pokemon List</button>
        <ul>
            {pokemonList.map((pokemonName) =>(
                <li key={pokemonName}>{pokemonName}</li>

            )) }
        </ul>
    </div>
  )
}

export default PokemonList