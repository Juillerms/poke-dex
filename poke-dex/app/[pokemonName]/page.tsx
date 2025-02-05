import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";


export default async function PokemonPage({ params } : { params: {pokemonName: string } }) {
    
    const {pokemonName} = params;

    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return(
        <>
            <h1 className="text-4xl text-bold pt-4">{pokemonName}</h1>
            <Image
                src={pokemonObject.sprites.front_default}
                alt={"Picture of " + pokemonName}
                width="200"
                height="200"
            />
        </>
    )
     
}