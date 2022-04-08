import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { get } from 'lodash'

const Moves = ({ pokemon }) => {
  if (!get(pokemon, 'moves.length')) return null

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Movimientos</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {pokemon.moves.map((move, index) => (
          <Typography key={index} variant="body2">
            {move.move.name}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default Moves