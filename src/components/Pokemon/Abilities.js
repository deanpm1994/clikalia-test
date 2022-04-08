import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { get } from 'lodash'

const Abilities = ({ pokemon }) => {
  if (!get(pokemon, 'abilities.length')) return null

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Habilidades</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {pokemon.abilities.map((ability, index) => (
          <Typography key={index} variant="body2">
            {ability.ability.name}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default Abilities