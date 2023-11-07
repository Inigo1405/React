import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "./Pokemon";

export const Pokedex = () => {
    const [pokemons, setPokemon] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon"

    useEffect(() => {
        axios.get(url).then((response) => {
            setPokemon(response.data.results)
            // console.log(pokemons)
            console.log(response)
        })
    }, [setPokemon])

    return(
        <div>
            {
                pokemons.map((pokemon) => {
                    return <Pokemon key={pokemon.name} pokemon={pokemon}/>
                })
            }
        </div>
        // <>
        //     <div>{pokemon}</div>
        // </>
    )
}