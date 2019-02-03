import React, { Component } from 'react';
import {Button, Grid } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Work from '@material-ui/icons/Work'
import PhoneInTalk from '@material-ui/icons/PhoneInTalk'
import Spa from '@material-ui/icons/Spa'
const Map = require ('./map.json')

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
      message: 'Welcome!',
      location: Map.Home
    }
  }

  updateLocation = (name) => {
    this.setState({
      location: Map[name],
      message: Map[name].message
    }, () =>{
      console.log(`Location ${[this.state.location.name]}`)
    })
  }

  componentDidMount() {
    this.setState({
      location: Map.Home,
      message: Map.Home.message
    }, () =>{
      console.log(`North? ${this.state.location.move.North}`)
    })
  }

  render() {

  return(
    <Grid container spacing={8} style={bgStyle}>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs={2}>
          <AccountCircle 
            style={iconStyle} 
            onMouseOver={() => {this.setState({message: 'Profile'})}}
            onMouseLeave={() => {this.setState({message: this.state.location.message})}}
          />
        </Grid>
        <Grid item xs={8} style={northStyle}>
          {(this.state.location.move.North !== null) ?
            <Button 
              color="primary" 
              variant="contained" 
              onClick={() => {this.updateLocation(this.state.location.move.North)}}
              >Go North</Button> :
            <p> </p>
          }
        </Grid>
        <Grid item xs={2} >
          <Work
            style={iconStyle}
            onMouseOver={() => {
              this.setState({message: 'Inventory'})
            }}
            onMouseLeave={() => {
              this.setState({message: this.state.location.message})
            }}
          />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={24} style={vAlignStyle}  >
        <Grid item xs={3} style={westStyle}>
          {(this.state.location.move.West !== null) ?
            <Button 
              color="primary" 
              variant="contained" 
              onClick={() => {this.updateLocation(this.state.location.move.West)}}
            >Go West</Button> :
            <p> </p>
          }
        </Grid>
        <Grid item xs={6} >
          < img src={`./${this.state.location.img}`} alt="Placeholder" />
          <p style={{ backgroundColor: 'rgba(0,0,0,.25', color: 'rgba(255,255,255,0.75)'}}>{this.state.message}</p>
        </Grid>
        <Grid item xs={3} style={eastStyle}>
          {(this.state.location.move.East !== null) ?
            <Button 
              color="primary" 
              variant="contained" 
              onClick={() => {this.updateLocation(this.state.location.move.East)}}
            >Go East</Button> :
            <p> </p>
          }
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={24}>
        <Grid item xs={2}>
          <Spa
            style={iconStyle}
            onMouseOver={() => {
              this.setState({message: 'Objects'})
            }}
            onMouseLeave={() => {
              this.setState({message: this.state.location.message})
            }}
          />
        </Grid>
        <Grid item xs={8} style={southStyle}>
          {(this.state.location.move.South !== null) ?
            <Button 
              color="primary" 
              variant="contained" 
              onClick={() => {this.updateLocation(this.state.location.move.South)}}
            >Go South</Button> :
            <p> </p>
          }
        </Grid>
        <Grid item xs={2}>
          <PhoneInTalk
            style={iconStyle}
            onMouseOver={() => {
              this.setState({message: 'Interact'})
            }}
            onMouseLeave={() => {
              this.setState({message: this.state.location.message})
            }}              
          />
        </Grid>
      </Grid>
    </Grid>
  )}
}

export default Game