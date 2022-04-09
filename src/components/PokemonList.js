import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { totalPokemons, pokemonsSlice } from '../selectors/pokemons';

const PokemonList = () => {
  const [params, setParams] = useState({
    page: 0,
    limit: 20,
  })
  const [filter, setFilter] = useState('')
  const total = useSelector(totalPokemons)
  const pokemons = useSelector(pokemonsSlice(params, filter))

  const handleChangePage = (event, pageToChange) => {
    setParams({
      ...params,
      page: pageToChange
    })
  }

  const handleFilter = name => {
    if (name !== filter) {
      if (!!params.page)
        setParams({ page: 0, limit: 20 })
      setFilter(name)
    }
  }

  return (
    <Container maxWidth="md" sx={{ paddingTop: '2.5rem' }}>
      <Box sx={{ padding: '0 .5rem 2rem' }}>
        <TextField
          sx={{ width: '100%' }}
          label="Find pokemon"
          variant="standard"
          onChange={event => handleFilter(event.target.value)}
        />
      </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">Nombre</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">URL</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemons.map((pokemon, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell>{pokemon.name}</TableCell>
                  <TableCell>
                    <Link to={`/pokemon/${pokemon.name}`}>
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