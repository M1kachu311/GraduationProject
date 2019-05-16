import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Input from './Input'

const suggestAJob = 'יש לי משרה!'
const sendJobText = 'אנא מלאו את השדות ולחצו על שלח'
const jobName = 'שם המשרה'
const description = 'תיאור המשרה'
const type = 'משרה מלאה / חלקית'
const location = 'מיקום המשרה'
const senderName = 'שם המעסיק'
const senderPhone = 'מס׳ טלפון המעסיק'
const mail = 'כתובת מייל המעסיק'
const cancel = 'בטל'
const send = 'שלח'
const Subscribe = 'יש לי משרה'

const suggestAJobStyle = {
    background: '#0D84A3',
    color: '#fff',
    border: 'none',
    width: '120px',
    marginTop: '10px',
    marginLeft: '20px'
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

export default class IhaveAJobPopUp extends React.Component {
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
          {suggestAJob}
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
                {sendJobText}
              </DialogContentText>
                <div style={inputListStyle}>
                  <div>
                    <Input 
                      placeholder={location}
                    />
                    <Input 
                      placeholder={senderName}
                    />
                    <Input 
                      placeholder={senderPhone}
                    />
                    <Input 
                      placeholder={mail}
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder={jobName}
                    />
                    <TextField
                      style={textFielDescriptionStyle}
                      id="standard-textarea"
                      placeholder={description}
                      multiline
                      margin="normal"
                    />
                    <Input 
                      placeholder={type}
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