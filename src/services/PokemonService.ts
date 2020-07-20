import { URL } from "url";

interface Pokemon {
    image: string,
    name: string,
    details: string
};

const URLPOKEMON: string = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonByName = async (name: string) => {
    const response = await fetch(URLPOKEMON + name);
    const data = await response.json();
    console.log(data.types[0]);
    const pokemon: Pokemon = {
        image: data.sprites.front_default,
        name: data.name,
        details: data.types[0].type.name
    }
    return pokemon;
}

