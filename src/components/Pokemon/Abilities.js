import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { get } from 'lodash'

const Abilities = ({ pokemon }) => {
  if (!get(pokemon, 'abilities.length')) return null

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="h6">Abilities</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {pokemon.abilities
          .filter(ability => !get(ability, 'is_hidden'))
          .map((ability, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemText primary={ability.ability.name} />
            </ListItem>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default Abilities