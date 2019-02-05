import React, {Component} from 'react'
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import {AddIcon} from '@material-ui/icons/Add'
import {PersonIcon} from '@material-ui/icons/Person'

let inventory = [
  {"dagger": {
    "cost": 10,
    "damage": 5,
    "protection": 1,
    "img": "dagger.jpg"
  },
  "potion": {
    "cost": 25,
    "damage": 0,
    "protection": 10,
    "img": "potion.jpg"
  }}
]

class InventoryDialog extends Component {
  handleClose = () => {
    alert("closing")
  };

  render() {
    return(
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {inventory.map(item => (
              <ListItem button onClick={() => this.handleListItemClick(item)} key={item}>
                <ListItemAvatar>
                  <Avatar className="avatar">
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    )
  }
}

export default InventoryDialog