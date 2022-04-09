import React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ReplayIcon from '@mui/icons-material/Replay'

let Retry = props => {
  return (
    <Backdrop
      open={props.open}
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Grid 
        textAlign="center"
        data-testid="retry-component"
      >
        <Typography marginBottom="1rem" variant="h6">
          Something is wrong 😒
        </Typography>
        <Button
          onClick={props.onRetry}
          variant="contained"
          startIcon={<ReplayIcon />}
        >
          Retry
        </Button>
      </Grid>
    </Backdrop>
  )
}

Retry.propTypes = {
  open: PropTypes.bool.isRequired,
  onRetry: PropTypes.func.isRequired
}

export default Retry
