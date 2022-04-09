import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { get } from 'lodash'

import api from '../../reducers/api'
import Image from './Image';
import Abilities from './Abilities';
import Moves from './Moves';
import Forms from './Forms';

const Pokemon = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)

  const getPokemon = useCallback(
    async (name) => {
      setLoading(true)
      try {
        const response = await api.get(`pokemon/${name}`)
        setPokemon(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }, [])

  useEffect(() => {
    getPokemon(name)
  }, [getPokemon, name])

  return (
    <Container maxWidth="md" sx={{ padding: '2.5rem 0' }}>
      <Backdrop
        open={loading}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

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