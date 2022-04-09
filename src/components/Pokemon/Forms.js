import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { get } from 'lodash'

import Form from './Form';

const Forms = ({ pokemon }) => {
  if (!get(pokemon, 'forms.length')) return null

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="h6">Forms</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">ID</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1">Is Battle Only</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemon.forms.map((form, index) => (
                <Form key={index} form={form} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  )
}

export default Forms