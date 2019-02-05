import React, {Component} from 'react'
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import {AddIcon} from '@material-ui/icons/Add'
import {PersonIcon} from '@material-ui/icons/Person'

class InventoryDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: props.inventory
    }
  } 
  handleClose = () => {
    this.props.onClose('inventory')
  }

  render() {
    return(
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {this.state.inventory.map(item => (
              <ListItem button onClick={() => this.handleListItemClick(item)} key={item}>
                <ListItemAvatar>
                  <Avatar className="avatar">
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    )
  }
}

export default InventoryDialog