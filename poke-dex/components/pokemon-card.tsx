"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const typeColors: { [key: string]: string } = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};

interface PokemonCardProps {
    name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [types, setTypes] = useState<string[]>([]);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();

                setImageUrl(data.sprites.other["official-artwork"].front_default);

                setTypes(data.types.map((typeObject: any) => typeObject.type.name));
            } catch (error) {
                console.error("Erro ao buscar Pokémon:", error);
            }
        }

        fetchPokemonData();
    }, [name]);

    return (
        <Link 
            href={`/${name}`}
            className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 flex flex-col items-center"
            key={name + "Card"}
        >
            {imageUrl && (
                <img src={imageUrl} alt={name} className="w-24 h-24 mb-2" />
            )}

            <h2 className="text-2xl font-semibold">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>

            <div className="flex gap-2 mt-2">
                {types.map((type) => (
                    <span 
                        key={type} 
                        className="px-2 py-1 text-sm rounded-lg text-white capitalize"
                        style={{ backgroundColor: typeColors[type] || "#777" }} 
                    >
                        {type}
                    </span>
                ))}
            </div>
        </Link>
    );
}
