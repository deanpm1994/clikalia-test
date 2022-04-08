import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { totalPokemons, pokemonsSlice } from '../selectors/pokemons';

const PokemonList = () => {
  const [params, setParams] = useState({
    page: 0,
    limit: 20,
  })
  const total = useSelector(totalPokemons)
  const pokemons = useSelector(pokemonsSlice(params))

  const handleChangePage = (event, pageToChange) => {
    setParams({
      ...params,
      page: pageToChange
    })
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
                    <Link to={`/${[...pokemon.url.matchAll(/pokemon\/.*\/$/g)][0]}`}>
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
        count={total}
        rowsPerPage={20}
        page={params.page}
        onPageChange={handleChangePage}
      // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default PokemonList