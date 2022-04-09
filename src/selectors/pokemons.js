import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';

import { pokemonsSelector } from '../reducers/pokemons'

const pokemosState = state => get(state, 'pokemons')

export const pokemonsSlice = (params, filter) => createDraftSafeSelector(
  pokemonsSelector.selectAll,
  pokemons => !!pokemons
    ? pokemons
      .filter(pokemon => pokemon.name.includes(filter))
      .slice(params.limit * params.page, params.limit * params.page + params.limit)
    : []
)

export const totalPokemons = filter => createDraftSafeSelector(
  pokemonsSelector.selectAll,
  pokemons => !!pokemons
    ? pokemons
      .filter(pokemon => pokemon.name.includes(filter))
      .length
    : []
)

export const loadingPokemons = createDraftSafeSelector(
  pokemosState,
  state => get(state, 'loading') === 'pending'
)