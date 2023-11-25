import React from "react";

export const Pokemon = ({pokemon, select}) => {
  // console.log(pokemon)

  const selectPokemon = () => {
    select(pokemon)
  }

  return ( 
    <>
      <div>
        <h3>{pokemon.name} #{pokemon.id}</h3>
        <img src={pokemon.sprites.front_default} alt="" />
        {/* <img src={pokemon.sprites.front_shiny} alt="" /> */}
        <br />

        <button onClick={selectPokemon}>Add Pokemon</button>
      </div>
    </>
  )
}