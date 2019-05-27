import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core";

import Input from "./Input";

const suggestARealEstate = "יש לי דירה!";
const suggestText = "אנא מלאו את השדות ולחצו על שלח";
const offer = "השכרה/מכירה";
const type = "סוג הנכס";
const rooms = "מספר חדרים";
const floor = "קומה";
const address = "כתובת";
const price = "מחיר";
const description = "תיאור הנכס";
const senderName = "שם בעל הנכס";
const senderPhone = "מס׳ טלפון בעל הנכס";
const cancel = "בטל";
const send = "שלח";
const Subscribe = "יש לי דירה!";

const suggestAJobStyle = {
  background: "#fff",
  color: "#0D84A3",
  width: "120px",
  margin: "10px",
  border: "1px solid #0C84A3"
};

const inputListStyle = {
  display: "flex"
};

const textFielDescriptionStyle = {
  right: "8px",
  width: '94%'
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

const styles = theme => ({
  formControl: {
    width: '600px'
  },
  formStyle: {
    width: '100%'
  }
})

class SugestRealEstate extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props
    return (
      <div>
        <Button
          style={suggestAJobStyle}
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          {suggestARealEstate}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{Subscribe}</DialogTitle>
          <form className={classes.formControl}>
            <DialogContent>
              <DialogContentText>{suggestText}</DialogContentText>
              <div style={inputListStyle}>
                <div className={classes.formStyle}>
                  <Input 
                    placeholder={offer}
                    fullWidth
                  />
                  <Input placeholder={type} />
                  <Input placeholder={rooms} />
                  <Input placeholder={floor} />
                  <Input placeholder={price} />
                </div>
                <div className={classes.formStyle}>
                  <Input placeholder={address} />
                  <Input placeholder={senderName} />
                  <Input placeholder={senderPhone} />
                  <TextField
                    style={textFielDescriptionStyle}
                    id="standard-textarea"
                    placeholder={description}
                    multiline
                    rows="4"
                    margin="normal"
                    fullWidth
                  />
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} style={cancelButtonStyle}>
                {cancel}
              </Button>
              <Button onClick={this.handleClose} style={sendButtonStyle}>
                {send}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SugestRealEstate)
