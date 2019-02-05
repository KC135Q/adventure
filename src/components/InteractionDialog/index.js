import React, {Component} from 'react'
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import '../Game/Game.css'

class InteractionDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: props.inventory
    }
  } 
  handleClose = () => {
    this.props.onClose('interaction')
  }

  render() {
    const { selectedItem, ...other } = this.props
    return(
      <Dialog onClose={this.handleClose} aria-labelledby="inventory-dialog-title" {...other}>
        <DialogTitle id="inventory-dialog-title">Interactions Available</DialogTitle>
        <div>
          <List>
            {this.state.inventory.map(item => (
              <ListItem button onClick={() => this.handleClose()} key={item.index}>
                <ListItemAvatar>
                  <Avatar className="avatar">
                    <img src={item.imgTh} alt={item.name}></img>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
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

export default InteractionDialog