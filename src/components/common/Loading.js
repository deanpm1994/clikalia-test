import React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

let Loading = props => {
  return (
    <Backdrop
      open={props.open}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

Loading.propTypes = {
  open: PropTypes.bool.isRequired
}

export default Loading
