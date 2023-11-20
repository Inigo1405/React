import React, { useState, useEffect } from "react";
import axios from "axios";

import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import firestore from "../firebase/firebaseConfig";

import { Pokemon } from "./Pokemon";
import './pokedex.css'

export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)
    const [poke, setPoke] = useState()
    const [team, setTeam] = useState([])

    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page-1)*20}`

    // Referencia de la Firebase 
    function writePokeTeam() {

        const docData = team.reduce((result, poke, index) => {
            result[`poke${index + 1}`] = {
              name: poke.name,
              sprite: poke.sprite
            };
            return result;
        }, {});
          
        setDoc(doc(firestore, 'Teams/principal'), docData)
    }
    
    
    // Consume la API de pokemon
    useEffect(() => {
        axios.get(url).then((response) => {
            const pokemonList = response.data.results
            const pokemonPromises = pokemonList.map(pokemon => {
                return axios.get(pokemon.url)
            })

            Promise.all(pokemonPromises).then(pokemonResponses => {
                const pokemonData = pokemonResponses.map(res => {
                    const pokemon = res.data 
                    return {
                        ...pokemon,
                        sprites: pokemon.sprites
                    }
                })
                setPokemons(pokemonData)
            })
        })
    }, [setPokemons, page])



    useEffect(() => {
        const unsub = onSnapshot(doc(firestore, "Teams", "principal"), (snapshot)=>{
            if (snapshot.exists()){
                const docData = snapshot.data()
    
                Object.keys(docData).forEach((key) => {
                    console.log(`${key}: ${docData}`);
                });
            }
        })
    }, [])


    const onClick = (e) => {
        if(e.target.name === 'delet'){
            setTeam([])
        }
        else if(e.target.name === 'save'){
            console.log('Save Team!')
            writePokeTeam()
        }
    }

    const selectPokemon = (data) => {
        setPoke(
            {   name: data.name,
                sprite: data.sprites.front_default
            }
        )
    }
    

    // Team
    useEffect(() => {
        if (team[0] === undefined){
            team.shift()
        }
        if (team.length < 6){
            setTeam([...team, poke])
        }
        
    }, [poke])
    console.log(team)


    return(
        <>
            <div>
                <h2>Page {page}</h2>
                {
                    page != 1 && <button onClick={() => {setPage(page-1)}}>Back</button>
                }
                
                <button onClick={() => {setPage(page+1)}}>Next</button>
            </div>

            <div>
                <div className="wrapper">
                    {
                        pokemons.map((pokemon) => {
                            return <Pokemon key={pokemon.name} pokemon={pokemon} select={selectPokemon} />
                        })
                    }
                </div>

                <hr />

                <h2>Team: </h2>
                <div className="wrapperTeam">
                    {
                        team.map((poke) => {
                            if(poke != undefined){
                                console.log(poke)
                                return (
                                    <>
                                        <div>
                                            <p>{poke.name}</p>
                                            <img src={poke.sprite}/>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                    <br />
                </div>
                    {
                        team.length == 6 
                        ? 
                        <button name="save" onClick={onClick}>Save Team</button> : <></>    
                    }
                    <button name="delet" onClick={onClick}>Delete Team</button>
            </div>
        </>
    )
}