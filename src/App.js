import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon/Pokemon';
import { useDispatch } from 'react-redux';

import { loadPokemons } from './reducers/pokemons'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPokemons())
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', minHeight: '100vh',  }}>
          <BrowserRouter>
            <Routes>
              <Route path="/pokemon/:id" element={<Pokemon />} />
              <Route path="/" element={<PokemonList />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Container>
    </>
  );
}

export default App;
