import React, {Component} from 'react'
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

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
    const { selectedItem, ...other } = this.props
    return(
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Inventory</DialogTitle>
        <div>
          <List>
            {this.state.inventory.map(item => (
              <ListItem button key={item.index}>
                <ListItemAvatar>
                  <Avatar className="avatar">
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    )
  }
}

export default InventoryDialog