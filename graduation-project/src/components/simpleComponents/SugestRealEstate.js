import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core";

const suggestARealEstate = "יש לי דירה!";
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
    width: "600px"
  },
  formStyle: {
    width: "100%"
  }
});
const textAreaStyle = {
  width: "85%",
  padding: "20px"
};
const centerResponse = {
  display: "flex",
  textAling: "center",
  justifyContent: "center",
  alignItems: "center"
};

class SugestRealEstate extends React.Component {
  state = {
    open: false,
    name: "",
    phone: "",
    offer: "",
    type: "",
    rooms: "",
    floor: "",
    dir: "",
    price: "",
    description: "",
    sent: false,
    showAlert: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleSubmit = () => {
    let url = "http://127.0.0.1:3002/apartmentoffers";
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      offer: this.state.offer,
      type: this.state.type,
      rooms: this.state.rooms,
      floor: this.state.floor,
      dir: this.state.dir,
      price: this.state.price,
      description: this.state.description
    };
    if (
      this.state.name !== "" &&
      this.state.phone !== "" &&
      this.state.offer !== "" &&
      this.state.type !== "" &&
      this.state.rooms !== "" &&
      this.state.floor !== "" &&
      this.state.dir !== "" &&
      this.state.price !== "" &&
      this.state.description !== ""
    ) {
      this.setState({ showAlert: false });
      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          this.setState({
            sent: true,
            name: "",
            phone: "",
            offer: "",
            type: "",
            rooms: "",
            floor: "",
            dir: "",
            price: "",
            description: "",
            validate: false
          });
        })
        .catch(error => console.error("Error:", error));
    } else {
      this.setState({ showAlert: true });
    }
  };
  handleClose = () => {
    this.setState({
      open: false,
      sent: false,
      name: "",
      phone: "",
      offer: "",
      type: "",
      rooms: "",
      floor: "",
      dir: "",
      price: "",
      description: "",
      validate: false,
      showAlert: false
    });
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangePhone = event => {
    this.setState({ phone: event.target.value });
  };
  handleChangeOffer = event => {
    this.setState({ offer: event.target.value });
  };
  handleChangeType = event => {
    this.setState({ type: event.target.value });
  };
  handleChangeRooms = event => {
    this.setState({ rooms: event.target.value });
  };
  handleChangeFloor = event => {
    this.setState({ floor: event.target.value });
  };
  handleChangeDir = event => {
    this.setState({ dir: event.target.value });
  };
  handleChangePrice = event => {
    this.setState({ price: event.target.value });
  };
  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { classes } = this.props;
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
            {this.state.sent ? (
              <div style={centerResponse}>
                <p>תודה ההצעת דיור התקבלה בהצלחה</p>
              </div>
            ) : (
              <DialogContent>
                <div style={inputListStyle}>
                  <div className={classes.formStyle}>
                    <TextField
                      style={textAreaStyle}
                      placeholder={senderName}
                      name="name"
                      onChange={this.handleChangeName}
                      value={this.state.sname}
                    />
                    <TextField
                      style={textAreaStyle}
                      placeholder={senderPhone}
                      name="phone"
                      onChange={this.handleChangePhone}
                      value={this.state.phone}
                    />
                    <TextField
                      style={textAreaStyle}
                      placeholder={offer}
                      name="offer"
                      onChange={this.handleChangeOffer}
                      value={this.state.offer}
                    />
                    <TextField
                      style={textAreaStyle}
                      placeholder={type}
                      name="type"
                      onChange={this.handleChangeType}
                      value={this.state.type}
                    />
                    <TextField
                      style={textAreaStyle}
                      placeholder={address}
                      name="dir"
                      onChange={this.handleChangeDir}
                      value={this.state.dir}
                    />
                  </div>
                  <div className={classes.formStyle}>
                    <TextField
                      style={textAreaStyle}
                      placeholder={rooms}
                      name="rooms"
                      onChange={this.handleChangeRooms}
                      value={this.state.rooms}
                    />
                    <TextField
                      style={textAreaStyle}
                      placeholder={floor}
                      name="floor"
                      onChange={this.handleChangeFloor}
                      value={this.state.floor}
                    />
                    <TextField
                      style={textAreaStyle}
                      placeholder={price}
                      name="price"
                      onChange={this.handleChangePrice}
                      value={this.state.price}
                    />
                    <TextField
                      style={textAreaStyle}
                      onChange={this.handleChangeDescription}
                      value={this.state.description}
                      id="standard-textarea"
                      placeholder={description}
                      multiline
                      rows="4"
                      fullWidth
                      name="description"
                    />
                  </div>
                </div>
              </DialogContent>
            )}
            {this.state.showAlert ? (
              <div style={centerResponse}>
                <p>נא מלאו את כל השדות הנדרשים</p>
              </div>
            ) : (
              ""
            )}

            {this.state.sent ? (
              <DialogActions>
                <Button onClick={this.handleClose} style={sendButtonStyle}>
                  {cancel}
                </Button>
              </DialogActions>
            ) : (
              <DialogActions>
                <Button onClick={this.handleClose} style={cancelButtonStyle}>
                  {cancel}
                </Button>
                <Button style={sendButtonStyle} onClick={this.handleSubmit}>
                  {send}
                </Button>
              </DialogActions>
            )}
          </form>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SugestRealEstate);
