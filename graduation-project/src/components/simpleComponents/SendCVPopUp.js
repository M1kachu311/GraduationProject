import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Input from './Input'


const sendCV = 'שלח קו״ח'
const cancel = 'ביטול'
const send = 'שלח'
const sendCVTitle = 'שלח קו״ח'
const formName = 'שם מלה'
const formEmail = 'מייל'
const formPhone = 'טלפון'
const uploadFile = 'העלת קובץ'

const sendCVPopUpStyle = {
    background: '#0D84A3',
    color: '#fff',
    border: 'none',
    width: '120px',
    marginTop: '10px',
    marginLeft: '20px'
}

const uploadStyle = {
    textIndent: '-999em',
    outline: 'none',
    width: '50%',
    height: '10%',
    position: 'absolute',
    left: '100px',
    top: '244px'
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

const chooseFileButtonStyle = {
    background: '#0D84A3',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
}

const dialogStyle = {
    height: '500px'
}

export default class SendCVPopUp extends React.Component {
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
        <Button style={sendCVPopUpStyle} variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {sendCV}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          style={dialogStyle}
        >
          <DialogTitle id="form-dialog-title">{sendCVTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              אם השמרה הזאת מעניית אותך, שלח קו״ח כאת
            </DialogContentText>
            <form action="http://127.0.0.1:3002/mail" encType="multipart/form-data" method="POST">
                <Input 
                    type="text" 
                    name="name" 
                    placeholder={formName}
                />
                <Input 
                    type="text" 
                    name="email" 
                    placeholder={formEmail}
                />
                <Input 
                    type="text" 
                    name="phone" 
                    placeholder={formPhone}
                />
            </form>
            <label htmlFor="contained-button-file">
                    <Button 
                        variant="contained" 
                        component="span" 
                        style={chooseFileButtonStyle}    
                    >
                        {uploadFile}
                    </Button>
            </label>
            <input
                style={uploadStyle}
                id="contained-button-file"
                multiple
                type="file"
            />    
          </DialogContent>
          <DialogActions>
            <Button
                onClick={this.handleClose} 
                style={cancelButtonStyle}
            >
                {cancel}
            </Button>
            <form action="http://127.0.0.1:3002/mail" encType="multipart/form-data" method="POST">
            <Button 
                onClick={this.handleClose} 
                type="submit" 
                value="Upload a file"
                style={sendButtonStyle} 
            >
              {send}
            </Button>
            </form>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}