import React, { Component } from 'react';
import {Button, Grid } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Work from '@material-ui/icons/Work'
import PhoneInTalk from '@material-ui/icons/PhoneInTalk'
import Spa from '@material-ui/icons/Spa'

const bgImage = "./meadow_blue.png"

const bgStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundColor: 'rgba(0,0,0,.5',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  color: 'rgba(255, 255, 255, 0.5)'
}

const iconStyle = {
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: "5px",
  color: "black",
  height: "60px",
  width: "40px"
}

const iconStyleRev = {
  padding: '20px',
  backgroundColor: "black",
  borderRadius: "5px",
  color: 'rgba(255, 255, 255, 0.5)',
  height: "60px",
  width: "40px"
}

const vAlignStyle = {
  display: "flex",
  alignItems: "center"
}

const northStyle = {
  marginBottom: "0px",
  textAlign: "center"
}

const eastStyle = {
  textAlign: "left"
}

const southStyle = {
  justifyContent: "center"
}

const westStyle = {
  textAlign: "right"
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome!'
    };
  }

  render() {

  return(
    <Grid container spacing={8} style={ bgStyle }>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs={2}>
          <AccountCircle 
            style={iconStyle} 
            onMouseOver={() => {this.setState({message: 'view profile'})}}
            onMouseLeave={() => {this.setState({message: 'Remember to sleep when you can'})}}
          />
        </Grid>
        <Grid item xs={8} style={northStyle}>
          <Button color="primary" variant="contained" >Go North</Button>
        </Grid>
        <Grid item xs={2} >
          <Work style={iconStyle} onMouseOver={() => {this.setState({message: 'check inventory'})}}/>
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={24} style={vAlignStyle}  >
        <Grid item xs={3} style={westStyle}>
          <Button color="primary" variant="contained">Go West</Button>
        </Grid>
        <Grid item xs={6} >
          < img src="./cabin_768x450.jpg" alt="Placeholder"  />
        </Grid>
        <Grid item xs={3} style={eastStyle}>
          <Button color="primary" variant="contained">Go East</Button> 
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={24}>
        <Grid item xs={2}>
          <Spa style={iconStyle} onMouseOver={() => {this.setState({message: 'get objects'})}}/>
        </Grid>
        <Grid item xs={8}>
          <Button color="primary" variant="contained" style={southStyle}>Go South</Button>
          <p style={{ backgroundColor: 'rgba(0,0,0,.25', color: 'rgba(255,255,255,0.75)'}}>{this.state.message}</p>
        </Grid>
        <Grid item xs={2}>
          <PhoneInTalk style={iconStyle} onMouseOver={() => {this.setState({message: 'talk to someone'})}}/>
        </Grid>
      </Grid>
    </Grid>
  )
  }
}

export default Game