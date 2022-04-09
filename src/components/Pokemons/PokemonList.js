import React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

let PokemonList = props => {
  if (!props.pokemons) return null

  return (
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
            {props.pokemons.map((pokemon, index) => (
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
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
}

export default PokemonList