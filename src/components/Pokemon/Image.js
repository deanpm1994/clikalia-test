import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import * as colors from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import { get } from 'lodash'

const Image = ({ pokemon }) => {
  if (!pokemon) return null

  return (
    <>
      <Box
        sx={{ position: 'relative', padding: '2rem 1rem' }}
      >
        <Box
          sx={{
            position: 'absolute',
            height: '50%',
            top: 0,
            left: 0,
            right: 0,
            background: colors.blue[300]
          }}
        />

        <CardMedia
          component="img"
          height="auto"
          image={get(pokemon, 'sprites.back_default')}
          alt={get(pokemon, 'name')}
          sx={{
            borderRadius: '100%',
            border: '1px solid',
            borderColor: colors.blue[100],
            width: '10rem',
            minWidth: '5rem',
            margin: 'auto',
            zIndex: 1,
            background: colors.common.white,
            position: 'relative'
          }}
        />

      </Box>

      <Divider />
    </>
  )
}

export default Image