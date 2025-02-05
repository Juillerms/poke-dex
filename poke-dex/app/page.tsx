import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  //Search Bar
  const pokemonList = await getPokemonList();

  return (
    <PokemonGrid pokemonList={pokemonList}/>
  );
}
