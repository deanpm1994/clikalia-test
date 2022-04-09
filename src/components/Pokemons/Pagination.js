import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types'

let Pagination = props => {
  return (
    <TablePagination
      data-testid="pagination-component"
      rowsPerPageOptions={[20]}
      component="div"
      rowsPerPage={20}
      {...props}
    />
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination