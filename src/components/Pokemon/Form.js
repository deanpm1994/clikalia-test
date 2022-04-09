import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { get } from 'lodash'

import api from '../../reducers/api'

const Form = props => {
  const [form, setForm] = useState(null)
  const name = get(props, 'form.name')

  const getForm = useCallback(
    async (name) => {
      try {
        const response = await api.get(`pokemon-form/${name}`)
        setForm(response.data)
      } catch {
      }
    }, [])

  useEffect(() => {
    if (name)
      getForm(name)
  }, [getForm, name])

  if (!name || !form) return null

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{form.id}</Typography>
      </TableCell>
      <TableCell align="right">
        {form.is_battle_only
          ? <CheckCircleIcon color="success" />
          : <RemoveCircleIcon color="error" />
        }
      </TableCell>
    </TableRow>
  )
}

export default Form