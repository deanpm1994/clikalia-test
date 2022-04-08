import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { pokemonsSelector } from '../reducers/pokemons'

export const pokemonsSlice = params => createDraftSafeSelector(
  pokemonsSelector.selectAll,
  pokemons => !!pokemons
    ? pokemons.slice(params.limit * params.page, params.limit * params.page + params.limit)
    : []
)

export const totalPokemons = createDraftSafeSelector(
  pokemonsSelector.selectAll,
  pokemons => !!pokemons
    ? pokemons.length
    : []
)