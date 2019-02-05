import React, { Component } from 'react';
import {Button, Grid } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Work from '@material-ui/icons/Work'
import PhoneInTalk from '@material-ui/icons/PhoneInTalk'
import Spa from '@material-ui/icons/Spa'
import InventoryDialog from '../InventoryDialog'
import ProfileDialog from '../ProfileDialog'
import ObjectsDialog from '../ObjectsDialog'
import InteractionDialog from '../InteractionDialog'

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

let inventory = [
  {
    "index": 0,
    "name": "dagger",
    "cost": 10,
    "damage": 5,
    "protection": 1,
    "img": "dagger.jpg",
    "imgTh": "dagger50.jpg"
  },
  {
    "index": 1,
    "name": "potion",
    "cost": 25,
    "damage": 0,
    "protection": 10,
    "img": "potion.jpg",
    "imgTh": "potion50.jpg"
  }
]

let interactions = [
  {
    "index": 0,
    "name": "Psylocke",
    "cost": 0,
    "damage": 5,
    "protection": 0,
    "img": "psylocke.jpg",
    "imgTh": "psylocke50.jpg"
  },
  {
    "index": 1,
    "name": "Gandalf",
    "cost": 0,
    "damage": 0,
    "protection": 100,
    "img": "gandalf.jpg",
    "imgTh": "gandalf50.jpg"
  },
  {
    "index": 2,
    "name": "Zelda",
    "cost": 0,
    "damage": 0,
    "protection": 0,
    "img": "zelda.jpg",
    "imgTh": "zelda50.jpg"
  }
]

let objects = [
  {
    "index": 0,
    "name": "rations",
    "cost": 50,
    "damage": 0,
    "protection": 0,
    "img": "rations.jpg",
    "imgTh": "rations50.jpg"
  },
  {
    "index": 1,
    "name": "shield",
    "cost": 250,
    "damage": 5,
    "protection": 10,
    "img": "shield.jpg",
    "imgTh": "shield50.jpg"
  }
]

let profile = {
  "index": 0,
  "name": "Danny K",
  "cost": 1000000,
  "race": "Human",
  "damage": 7,
  "protection": 7,
  "img": "dan.jpg",
  "imgTh": "dan50.jpg"
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome!',
      location: Map.Home,
      inventoryOpen: false,
      profileOpen: false,
      objectsOpen: false,
      interactionOpen: false,
      selectedItem: inventory[0],
      selectedObject: objects[0],
      selectedInteracation: interactions[1]
    }
  }

  updateLocation = (name) => {
    this.setState({
      location: Map[name],
      message: Map[name].message
    })
  }

  componentDidMount() {
    this.setState({
      location: Map.Home,
      message: Map.Home.message
    })
  }

  handleClickOpen = (dlog) => {
    if (dlog === 'inventory') {
      this.setState({
        inventoryOpen: true,
      })
    } else if (dlog === 'profile') {
      this.setState({
        profileOpen: true,
      })
    } else if (dlog === 'objects') {
      this.setState({
        objectsOpen: true,
      })
    } else if (dlog === 'interaction') {
      this.setState({
        interactionOpen: true,
      })
    }
  };

  handleClose = (dlog) => {
    if (dlog === 'inventory') {
      this.setState({
        inventoryOpen: false
      })      
    } else if (dlog === 'profile') {
      this.setState({
        profileOpen: false
      })
    } else if (dlog === 'objects') {
      this.setState({
        objectsOpen: false
      })
    } else if (dlog === 'interaction') {
      this.setState({
        interactionOpen: false
      })
    }
  }

  render() {

  return(
    <Grid container spacing={8} style={bgStyle}>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs={2}>
          <AccountCircle 
            style={iconStyle}
            onClick={() => {this.handleClickOpen('profile')}}
            onMouseOver={() => {this.setState({message: 'Profile'})}}
            onMouseLeave={() => {this.setState({message: this.state.location.message})}}
          />
          <ProfileDialog 
            selectedItem={this.profile}
            open={this.state.profileOpen}
            onClose={this.handleClose}
            profile = {profile}
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
            onClick={() => {this.handleClickOpen('inventory')}}
            onMouseOver={() => {
              this.setState({message: 'Inventory'})
            }}
            onMouseLeave={() => {
              this.setState({message: this.state.location.message})
            }}
          />
          <InventoryDialog 
            selectedItem={this.state.selectedItem}
            open={this.state.inventoryOpen}
            onClose={this.handleClose}
            inventory = {inventory}
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
            onClick={() => {this.handleClickOpen('objects')}}
            onMouseOver={() => {
              this.setState({message: 'Objects'})
            }}
            onMouseLeave={() => {
              this.setState({message: this.state.location.message})
            }}
          />
          <ObjectsDialog 
            selectedItem={this.state.selectedObject}
            open={this.state.objectsOpen}
            onClose={this.handleClose}
            inventory = {objects}
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
            onClick = {() => {this.handleClickOpen('interaction')}}
            onMouseOver={() => {
              this.setState({message: 'Interact'})
            }}
            onMouseLeave={() => {
              this.setState({message: this.state.location.message})
            }}              
          />
          <InteractionDialog 
            selectedItem={this.state.selectedInteraction}
            open={this.state.interactionOpen}
            onClose={this.handleClose}
            inventory = {interactions}
          />
        </Grid>
      </Grid>
    </Grid>
  )}
}

export default Game