import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types'

let Search = props => {
  return (
    <Box 
      sx={{ padding: '0 .5rem 2rem' }}
      data-testid="search-component"
    >
      <TextField
        data-testid="search-field"
        fullWidth
        color="secondary"
        label="Find pokemon"
        variant="standard"
        onChange={event => props.onChange(event.target.value)}
      />
    </Box>
  )
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Search