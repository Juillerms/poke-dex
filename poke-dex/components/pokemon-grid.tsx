"use client"
import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import { Input } from "./ui/input"
import { text } from "stream/consumers" 
import { PokemonCard } from "./pokemon-card"
import { RedirectType } from "next/navigation"
import { Saira_Extra_Condensed } from "next/font/google"
import { SearchCheck } from "lucide-react"

interface PokemonGridProps {
    pokemonList:any 
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
    const [ searchText, setSearchText ] = useState("")

    console.log(pokemonList);

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList);
        
    

    return (
        <>
            <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="pokemonName">Pokemon Name</Label>
                    <Input 
                        type="text"
                        autoComplete="off"
                        value={searchText}
                        id="pokemonName"
                        placeholder="Charmander, Pikachu..."
                        onChange={(e) => setSearchText(e.target.value)} ></Input>
                </div>
                <h3 className="text-3xl pt-12 pb-6  text-center:">Pokemons</h3>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {filteredPokemonList.map((pokemon : any, index: number ) => {
                    return (
                        <PokemonCard key={pokemon.id || index} name={pokemon.name} />
                    )
                })}
            </div>
        </>
        
    )
}