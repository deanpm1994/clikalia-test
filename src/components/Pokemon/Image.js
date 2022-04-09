import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import * as colors from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { get } from 'lodash'

const Image = ({ pokemon }) => {
  const theme = useTheme()
  const [imgError, setImgError] = useState(false)

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
            background: theme.palette.primary.main
          }}
        />

        <Box
          sx={{
            borderRadius: '100%',
            border: '1px solid',
            borderColor: theme.palette.primary.light,
            width: '10rem',
            height: '10rem',
            margin: 'auto',
            zIndex: 1,
            background: colors.common.white,
            position: 'relative'
          }}
        >
          {!!get(pokemon, 'sprites.back_default') && !imgError && (
            <CardMedia
              component="img"
              height="auto"
              image={get(pokemon, 'sprites.back_default')}
              alt={get(pokemon, 'name')}
              sx={{
                borderRadius: '100%',
                width: '10rem',
                margin: 'auto',
              }}
              onLoad={() => setImgError(false)}
              onError={() => setImgError(true)}
            />
          )}
        </Box>

      </Box>

      <Divider />
    </>
  )
}

export default Image