import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Input from './Input'

const suggestARealEstate = 'יש לי דירה!'
const suggestText = 'אנא מלאו את השדות ולחצו על שלח'
const offer = 'השכרה/מכירה'
const type = 'סוג הנכס'
const rooms = 'מספר חדרים'
const floor = 'קומה'
const address = 'כתובת'
const price = 'מחיר'
const description = 'תיאור הנכס'
const senderName = 'שם בעל הנכס'
const senderPhone = 'מס׳ טלפון בעל הנכס'
const cancel = 'בטל'
const send = 'שלח'
const Subscribe = 'יש לי דירה!'

const suggestAJobStyle = {
  background: '#fff',
  color: '#0D84A3',
  border: 'none',
  width: '120px',
  margin: '10px',
  border: '1px solid #0C84A3'
}

const inputListStyle = { 
  display: 'flex'
}

const textFielDescriptionStyle = {
  width: '85%',
  right: '8px'
}

const sendButtonStyle = {
    background: '#0D84A3',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
}

const cancelButtonStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
}

export default class SugestRealEstate extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
        <Button style={suggestAJobStyle} variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {suggestARealEstate}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{Subscribe}</DialogTitle>
          <form>
            <DialogContent>
              <DialogContentText>
                {suggestText}
              </DialogContentText>
                <div style={inputListStyle}>
                  <div>
                    <Input 
                      placeholder={offer}
                    />
                    <Input 
                      placeholder={type}
                    />
                    <Input 
                      placeholder={rooms}
                    />
                    <Input 
                      placeholder={floor}
                    />
                    <Input 
                      placeholder={price}
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder={address}
                    />
                    <Input 
                      placeholder={senderName}
                    />
                    <Input 
                      placeholder={senderPhone}
                    />
                    <TextField
                      style={textFielDescriptionStyle}
                      id="standard-textarea"
                      placeholder={description}
                      multiline
                      margin="normal"
                    />
                  </div>
                </div>
            </DialogContent>
            <DialogActions>
              <Button 
                onClick={this.handleClose} 
                style={cancelButtonStyle}
              >
                {cancel}
              </Button>
              <Button 
                onClick={this.handleClose} 
                style={sendButtonStyle}
              >
                {send}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}