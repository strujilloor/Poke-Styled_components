interface IPokemon {
    image: string,
    name: string,
    details: string
};

const URLPOKEMONAPI: string = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonByName = async (name: string) : Promise<IPokemon> => {
    const response = await fetch(URLPOKEMONAPI + name);
    const data = await response.json();
    // Transform data to pokemon
    const pokemon: IPokemon = {
        image: data.sprites.front_default,  // stores front pokemon image
        name: data.name,                    // stores pokemon name
        details: data.types[0].type.name    // stores pokemon type name
    }
    return pokemon;
}

