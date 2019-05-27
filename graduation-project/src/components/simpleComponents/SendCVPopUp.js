import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Input from "./Input";

const sendCV = "שלח קו״ח";
const cancel = "ביטול";
const send = "שלח";
const sendCVTitle = "שלח קו״ח";
const formName = "שם מלא";
const formEmail = "מייל";
const formPhone = "טלפון";
const uploadFile = "העלת קובץ";

const uploadStyle = {
  textIndent: "-999em",
  outline: "none",
  width: "50%",
  height: "10%",
  position: "absolute",
  left: "100px",
  top: "244px"
};

const sendButtonStyle = {
  background: "#0D84A3",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

const cancelButtonStyle = {
  background: "red",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

const chooseFileButtonStyle = {
  background: "#0D84A3",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

const dialogStyle = {
  height: "500px"
};

const sendCVPopUpStyle = {
    background: "#0D84A3",
    color: "#fff",
    border: "none",
    width: "120px",
    marginTop: "10px",
    marginLeft: "20px"
  };

export default class SendCVPopUp extends React.Component {
  state = { name: "", phone: "", email: "", id: this.props.id, open: false };
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangePhone = event => {
    this.setState({ phone: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    var url = "http://127.0.0.1:3002/mail";
    var data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data) // data can be `string` or {object}!
    })
      .then(res => res.json())
      .then(response => {
        if (true) {
          console.log(response);
        }
      })
      .catch(error => console.error("Error:", error));

    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <Button
          style={sendCVPopUpStyle}
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
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
              אם המשרה הזאת מעניית אותך, שלח קו״ח כעת
            </DialogContentText>
            <Input
              type="text"
              name="name"
              placeholder={formName}
              onChange={this.handleChangeName}
            />
            <Input
              type="text"
              name="email"
              placeholder={formEmail}
              onChange={this.handleChangeEmail}
            />
            <Input
              type="text"
              name="phone"
              placeholder={formPhone}
              onChange={this.handleChangePhone}
            />
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
            <Button onClick={this.handleClose} style={cancelButtonStyle}>
              {cancel}
            </Button>

            <Button
              onClick={this.handleClose}
              type="submit"
              value="Upload a file"
              style={sendButtonStyle}
            >
              {send}
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }
}