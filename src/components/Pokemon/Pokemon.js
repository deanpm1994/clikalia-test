import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { get } from 'lodash'

import Image from './Image';
import Abilities from './Abilities';
import Moves from './Moves';
import Forms from './Forms';

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

  return (
    <Container maxWidth="md" sx={{ padding: '2.5rem 0' }}>
      <Card sx={{ maxWidth: '20rem', margin: 'auto' }}>
        <Image pokemon={pokemon} />

        <CardContent>


          <Typography gutterBottom variant="h5" component="div">
            {get(pokemon, 'name')}
          </Typography>

        </CardContent>


      </Card>

      <Box sx={{ maxWidth: '20rem', margin: '1rem auto' }}>

        <Abilities pokemon={pokemon} />

        <Moves pokemon={pokemon} />

        <Forms pokemon={pokemon} />
      
      </Box>
    
    </Container>
  )
}

export default Pokemon