import React, { useState, useEffect, useCallback } from 'react';
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
      await api.get(`pokemon-form/${name}`)
        .then(response => {
          setForm(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    [],
  )

  useEffect(() => {
    if (name)
      getForm(name)
  }, [getForm, name])

  if (!name || !form) return null

  return (
    <TableRow>
      <TableCell>{form.id}</TableCell>
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