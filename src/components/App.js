import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Pokemons from './Pokemons/Pokemons';
import Pokemon from './Pokemon/Pokemon';
import { loadPokemons } from '../reducers/pokemons'
import { loadingPokemons, errorPokemons } from '../selectors/pokemons'
import Loading from './common/Loading';
import Retry from './common/Retry';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0049",
      light: "#fff1f1"
    },
    secondary: {
      main: '#363232',
    },
    background: {
      default: "#f7f7f7",
    }
  },
  typography: {
    fontFamily: "Poppins,Helvetica Neue,Helvetica,Arial,sans-serif",
    body2: {
      fontSize: "12px"
    }
  }
});

function App() {
  const dispatch = useDispatch()
  const loading = useSelector(loadingPokemons)
  const error = useSelector(errorPokemons)

  useEffect(() => {
    dispatch(loadPokemons())
  }, [dispatch])

  return (
    <Box 
      sx={{ bgcolor: '#fff' }}
      data-testid="app-component"
    >
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Box sx={{ minHeight: '100vh', }}>

            <Loading open={loading} />
            <Retry open={error} onRetry={() => dispatch(loadPokemons())}/>

            <BrowserRouter>
              <Routes>
                <Route path="/pokemon/:name" element={<Pokemon />} />
                <Route path="/" element={<Pokemons />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </Container>

      </ThemeProvider>
    </Box>
  );
}

export default App;
