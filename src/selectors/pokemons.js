import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { pokemonsSelector } from '../reducers/pokemons'

export const pokemonsSlice = (params, filter) => createDraftSafeSelector(
  pokemonsSelector.selectAll,
  pokemons => !!pokemons
    ? pokemons
      .filter(pokemon => pokemon.name.includes(filter))
      .slice(params.limit * params.page, params.limit * params.page + params.limit)
    : []
)

export const totalPokemons = createDraftSafeSelector(
  pokemonsSelector.selectAll,
  pokemons => !!pokemons
    ? pokemons.length
    : []
)