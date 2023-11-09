import React, { useState, useEffect } from "react";
import axios from "axios";

export const Pokemon = ({pokemon}) => {
  const [poke, setPoke] = useState([])

  useEffect(() => {
    axios.get(pokemon.url).then((response) => {
      setPoke(response.data)
      // console.log(response.data)
    })
  }, [setPoke])

  console.log(poke.sprites)
  let sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`

  return (
    <>
      <h3>{pokemon.name}</h3>
      <img src={sprite} className="logo pokemon" alt={poke.name} />
    </>
  )
}