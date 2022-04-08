import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const [next, setNext] = useState(0)
  const [previous, setPrevious] = useState(0)

  const getPokemons = useCallback(
    (url) => {
      axios.get(url
        ? url
        : 'https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: 20,
        }
      })
        .then(response => {
          console.log(response.data)

          setPokemons(response.data.results)
          setNext(response.data.next)
          setPrevious(response.data.previous)
          setCount(response.data.count)
        })
        .catch(error => {
          console.log(error)
        })
    },
    [],
  )

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  const handleChangePage = (event, pageToChange) => {
    if (pageToChange > page && next) {
      getPokemons(next)
      setPage(pageToChange)
    }
    if (pageToChange < page && previous) {
      getPokemons(previous)
      setPage(pageToChange)
    }
  }

  return (
    <Container maxWidth="md" sx={{ paddingTop: '2.5rem' }}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: '80vh' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemons.map((pokemon, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell>{pokemon.name}</TableCell>
                  <TableCell>
                    <Link to={`pokemon/${pokemon.url}`}>
                      {pokemon.url}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[20]}
        component="div"
        count={count}
        rowsPerPage={20}
        page={page}
        onPageChange={handleChangePage}
      // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default PokemonList