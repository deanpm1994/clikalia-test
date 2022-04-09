import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

import { totalPokemons, pokemonsSlice } from '../../selectors/pokemons';
import Pagination from './Pagination';
import Search from './Search';
import PokemonList from './PokemonList';

const Pokemons = () => {
  const [params, setParams] = useState({
    page: 0,
    limit: 20,
  })
  const [filter, setFilter] = useState('')
  const total = useSelector(totalPokemons(filter))
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
      <Search
        onChange={value => handleFilter(value)}
      />

      <PokemonList
        pokemons={pokemons}
      />

      <Pagination
        page={params.page}
        count={total}
        onPageChange={handleChangePage}
      />
    </Container>
  )
}

export default Pokemons