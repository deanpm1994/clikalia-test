import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { get } from 'lodash'

import api from '../../reducers/api'
import Loading from '../common/Loading';
import Retry from '../common/Retry';
import Image from './Image';
import Abilities from './Abilities';
import Moves from './Moves';
import Forms from './Forms';

const Pokemon = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getPokemon = useCallback(
    async (name) => {
      setLoading(true)
      setError(null)
      try {
        const response = await api.get(`pokemon/${name}`)
        setPokemon(response.data)
        setLoading(false)
      } catch (error) {
        setError(!!error)
        setLoading(false)
      }
    }, [])

  useEffect(() => {
    getPokemon(name)
  }, [getPokemon, name])

  return (
    <Container 
      maxWidth="md" sx={{ padding: '2.5rem 0' }}
      data-testid="pokemon-component"
    >
      <Loading open={loading} />
      <Retry open={!!error} onRetry={() => getPokemon(name)}/>

      <Card sx={{ maxWidth: '20rem', margin: 'auto' }}>
        <Image pokemon={pokemon} />

        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
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