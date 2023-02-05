import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  useEffect(() => {
    fetchPokemon()
  }, [])

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    const pokemonData = await data.json()
    // console.log(pokemon.results)
    console.log(pokemonData)
    setPokemon(pokemonData.results)
  }

  return (
    <>
      {pokemon.map((monster) => {
        return (
          <h1 key={monster.name}>
            <Link to={`/shop/${monster.name}`}>{monster.name}</Link>
          </h1>
        )
      })}
    </>
  )
}

export default Shop
