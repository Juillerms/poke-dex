import Link from "next/link"

interface PokemonCardProps {
    name: string
}

export function PokemonCard({name}: PokemonCardProps) {
    return (
        <Link 
            href={name}
            className="group rounded-1g border border-transparent m-3 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
            key={name + "Card"}>
            <h2 className={` text-2xl font-semibold`}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
        </Link>
        
            
        
    )
}
