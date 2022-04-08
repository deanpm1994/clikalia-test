import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        console.log(response.data)
        setPokemons(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  return (
    <Container maxWidth="md">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableCell>Nombre</TableCell>
              <TableCell>URL</TableCell>
            </TableHead>
            <TableBody>
              {pokemons.map((pokemon, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell>{pokemon.name}</TableCell>
                  <TableCell>{pokemon.url}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  )
}

export default PokemonList