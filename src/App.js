import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Pokemons from './components/Pokemons/Pokemons';
import Pokemon from './components/Pokemon/Pokemon';
import { loadPokemons } from './reducers/pokemons'
import { loadingPokemons } from './selectors/pokemons'

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

  useEffect(() => {
    dispatch(loadPokemons())
  }, [dispatch])

  return (
    <Box sx={{ bgcolor: '#fff' }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box sx={{ minHeight: '100vh',  }}>
          
          <Backdrop 
            open={loading}
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

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
