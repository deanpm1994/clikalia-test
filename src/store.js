import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers'

const state = (preloadedState={}) => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.REACT_APP_BRANCH !== 'master',
    preloadedState,
  })

  if (module.hot)
    module.hot.accept('./reducers', () => store.replaceReducer(reducer))

  return store;
}

export default state;