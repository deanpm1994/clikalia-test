import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { get, sortBy, reverse } from 'lodash'

const Moves = ({ pokemon }) => {
  const [moves, setMoves] = useState([])

  useEffect(() => {
    if (get(pokemon, 'moves.length')) {
      setMoves(reverse(sortBy(pokemon.moves, ['move.url'])))
    }
  }, [pokemon])

  if (!get(pokemon, 'moves.length')) return null

  const deleteMove = index => {
    let movesCopy = [...moves]
    movesCopy.splice(index, 1)
    setMoves(movesCopy)
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="h6">Moves</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {moves.map((move, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemText 
                primary={move.move.name} 
                secondary={move.move.url}
              />
              <IconButton
                color="error"
                onClick={() => deleteMove(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default Moves