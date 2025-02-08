"use client";

import { useRouter } from "next/navigation";
import { getPokemonNameById } from "@/lib/pokemonAPI";

export function PokemonNavigation({ pokemonId }: { pokemonId: number }) {
    const router = useRouter();

    const handleNext = async () => {
        const nextPokemonName = await getPokemonNameById(pokemonId + 1);
        router.push(`/${nextPokemonName}`);
    };

    const handlePrevious = async () => {
        if (pokemonId > 1) {
            const prevPokemonName = await getPokemonNameById(pokemonId - 1);
            router.push(`/${prevPokemonName}`);
        }
    };

    return (
        <div className="flex justify-between items-center mt-4">
            <button 
                className="m-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={handlePrevious}
                disabled={pokemonId <= 1}
            >
                Previous
            </button>
            <button 
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
}
