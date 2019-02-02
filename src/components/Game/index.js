import React from 'react'
import {Button, Grid} from '@material-ui/core'

const vAlignStyle = {
  border: "1px dashed white",
  height: "450px",
  display: "flex",
  alignItems: "center"
}

const northStyle = {
  border: "1px dashed white",
  marginBottom: "-30px"
}

const eastStyle = {
  border: "1px dashed white",
  marginLeft: "-30px",
  textAlign: "left"
}

const southStyle = {
  border: "1px dashed white",
  justifyContent: "center"
}

const westStyle = {
  border: "1px dashed white",
  marginRight: "-30px",
  textAlign: "right"
}

const borderStyle = {
  border: "1px dashed purple",
}

function Game () {
  return (
    <Grid container spacing={8}>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs='2' style={borderStyle}>
          <p>Profile</p>
        </Grid>
        <Grid item xs='8'>
          <Button color="primary" variant="contained" style={northStyle}>North</Button>
        </Grid>
        <Grid item xs='2'>
          <p>Inventory</p>
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={24} style={vAlignStyle} >
        <Grid item xs='3' style={westStyle}>
          <Button color="primary" variant="contained">West</Button>
        </Grid>
        <Grid item xs='6'  style={borderStyle}>
          < img src="https://via.placeholder.com/450/0000FF/FFFFFF?Text=Down.com" alt="Placeholder" />
        </Grid>
        <Grid item xs='3' style={eastStyle}>
          <Button color="primary" variant="contained">East</Button> 
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={24} style={borderStyle}>
        <Grid item xs='2'>
          <p>Objects</p>
        </Grid>
        <Grid item xs='8'>
          <Button color="primary" variant="contained" style={southStyle}>South</Button>
        </Grid>
        <Grid item xs='2'>
          <p>Interaction</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Game