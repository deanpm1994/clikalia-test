import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { get, sortBy } from 'lodash'

const Moves = ({ pokemon }) => {
  if (!get(pokemon, 'moves.length')) return null

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Moves</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {sortBy(pokemon.moves, ['move.url'])
          .reverse()
          .map((move, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemText primary={move.move.name} />
            </ListItem>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default Moves