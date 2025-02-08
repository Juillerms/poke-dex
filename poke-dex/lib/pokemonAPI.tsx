const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
    const data = await response.json();
    return data.results;

}

export async function getPokemon(name: string ){

    const response = await fetch(POKEMON_API + "pokemon/" + name);
    const data = await response.json()
    return data;
    
}

export async function getNextPokemon(id: number) {
    const nextId = id + 1;
    return await getPokemon(nextId.toString());
}

export async function getPreviousPokemon(id: number) {
    const prevId = id > 1 ? id - 1 : 1;
    return await getPokemon(prevId.toString());
}

export async function getPokemonNameById(id: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data.name; 
}

