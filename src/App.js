import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="bg-primary">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
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
