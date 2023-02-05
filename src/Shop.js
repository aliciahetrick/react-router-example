import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [pokemon, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    const pokemonData = await data.json()
    // console.log(pokemon.results)
    console.log(pokemonData)
    setItems(pokemonData.results)
  }

  return (
    <>
      {pokemon.map((monster) => {
        return (
          <h1 key={monster.name}>
            <Link to={`shop/${monster.name}`}>{monster.name}</Link>
          </h1>
        )
      })}
    </>
  )
}

export default Shop
