import { combineReducers } from 'redux';

import PokemonsReducer from './pokemons';

const rootReducer = combineReducers({
  pokemons: PokemonsReducer
});

export default rootReducer;
