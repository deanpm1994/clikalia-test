import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

import api from './api'

const initialState = {
  entities: {},
  ids: [],
  loading: 'idle',
  error: null,
}

export const loadPokemons = createAsyncThunk(
  'pokemons/load',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('pokemon', {
        limit: '-1'
      })
      return response.data.results
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const adapter = createEntityAdapter({
  selectId: (pokemon) => pokemon.url,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const appSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(loadPokemons.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(loadPokemons.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = action.error
      }
    })
    builder.addCase(loadPokemons.fulfilled, (state, action) => {
      state.loading = 'idle'
      state.error = null
      adapter.setAll(state, action.payload)
    })
  }
});

const { reducer } = appSlice;

export const pokemonsSelector = adapter.getSelectors(state => state.pokemons);

export default reducer;