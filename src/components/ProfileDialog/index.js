import React, {Component} from 'react'
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import '../Game/Game.css'

class ProfileDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile: props.profile
    }
  } 
  handleClose = () => {
    this.props.onClose('profile')
  }

  render() {
    const { selectedItem, ...other } = this.props
    return(
      <Dialog onClose={this.handleClose} aria-labelledby="profile-dialog-title" {...other}>
        <DialogTitle id="profile-dialog-title">{this.state.profile.name}</DialogTitle>
        <div>
          <List>
            <ListItem button onClick={() => this.handleClose()} key={this.state.profile.index}>
              <ListItemAvatar>
                <Avatar className="avatar">
                  <img src={this.state.profile.imgTh} alt={this.state.profile.name}></img>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={this.state.profile.race} />
            </ListItem>
            <hr />
            <ListItem button onClick={() => this.handleClose()}>
              <ListItemAvatar>
                <Avatar style={{ color: "#f00", "backgroundColor": "#000" }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="close" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    )
  }
}

export default ProfileDialog