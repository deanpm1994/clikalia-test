import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Image from './Image';

const Pokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  const getPokemon = useCallback(
    (id) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
          setPokemon(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    [],
  )

  useEffect(() => {
    getPokemon(id)
  }, [getPokemon, id])

  console.log(pokemon)
  if (!pokemon) return null

  return (
    <Container maxWidth="md" sx={{ paddingTop: '2.5rem' }}>
      <Card sx={{ maxWidth: '20rem', margin: 'auto' }}>
        <Image pokemon={pokemon} />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          {pokemon.abilities.map((ability, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {ability.ability.name}
            </Typography>
          ))}
          {pokemon.moves.map((move, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {move.move.name}
            </Typography>
          ))}
        </CardContent>

      </Card>
    </Container>
  )
}

export default Pokemon