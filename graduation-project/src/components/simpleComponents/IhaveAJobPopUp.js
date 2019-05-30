import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles, FormHelperText } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const suggestAJob = "יש לי משרה!";
const jobName = "שם המשרה";
const description = "תיאור המשרה";
const type = "משרה מלאה / חלקית";
const location = "מיקום המשרה";
const senderName = "שם המעסיק";
const senderPhone = "מס׳ טלפון המעסיק";
const senderMail = "כתובת מייל המעסיק";
const cancel = "סגור";
const send = "שלח";
const Subscribe = "יש לי משרה";

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
  formStyle: {
    width: "100%"
  }
});
const textAreaStyle = {
  width: "85%",
  padding: "20px"
};
const alertStyle = {
  background: "#f8d7da",
  color: "#721c24",
  border: "1px solid #f5c6cb",
  width: "100%",
  margin: "0 auto",
  borderRadius: "5px",
  padding: "10px 0",
  textAlign: "center"
};
const notificationtStyle = {
  background: "#cce5ff",
  color: "#004085",
  border: "1px solid #b8daff",
  width: "100%",
  margin: "0 auto",
  borderRadius: "5px",
  padding: "10px 0",
  textAlign: "center"
};
const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  itemAlign: "center"
};

export default withStyles(styles)(
  class IhaveAJobPopUp extends React.Component {
    state = {
      open: false,
      sname: "",
      sphone: "",
      smail: "",
      name: "",
      location: "",
      type: "",
      description: "",
      loading: false,
      sent: false,
      showAlert: false
    };

    handleClickOpen = () => {
      this.setState({ open: true });
    };
    handleSubmit = () => {
      let url = "http://127.0.0.1:3002/joboffers";
      let data = {
        sname: this.state.sname,
        sphone: this.state.sphone,
        smail: this.state.smail,
        name: this.state.name,
        location: this.state.location,
        type: this.state.type,
        description: this.state.description
      };
      if (
        this.state.sname !== "" &&
        this.state.sphone !== "" &&
        this.state.smail !== "" &&
        this.state.name !== "" &&
        this.state.location !== "" &&
        this.state.type !== "" &&
        this.state.description !== ""
      ) {
        this.setState({ showAlert: false, loading: true });
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
              loading: false
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
        showAlert: false,
        sent: false,
        sname: "",
        sphone: "",
        smail: "",
        name: "",
        location: "",
        type: "",
        description: ""
      });
    };

    handleChangeSenderName = event => {
      this.setState({ sname: event.target.value });
    };
    handleChangeSenderPhone = event => {
      this.setState({ sphone: event.target.value });
    };
    handleChangeSenderEmail = event => {
      this.setState({ smail: event.target.value });
    };
    handleChangeName = event => {
      this.setState({ name: event.target.value });
    };
    handleChangeLocation = event => {
      this.setState({ location: event.target.value });
    };
    handleChangeType = event => {
      this.setState({ type: event.target.value });
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
            {suggestAJob}
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{Subscribe}</DialogTitle>
            <form className={classes.formControl}>
              {this.state.sent ? (
                <div style={notificationtStyle}>
                  <p>תודה ההצעת משרה התקבלה בהצלחה</p>
                  <p>ניצור איתך קשר בהקדם</p>
                </div>
              ) : (
                <DialogContent>
                  <div style={inputListStyle}>
                    <div className={classes.formStyle}>
                      <TextField
                        style={textAreaStyle}
                        placeholder={senderName}
                        name="sname"
                        onChange={this.handleChangeSenderName}
                        value={this.state.sname}
                      />
                      <TextField
                        style={textAreaStyle}
                        placeholder={senderPhone}
                        name="sphone"
                        onChange={this.handleChangeSenderPhone}
                        value={this.state.sphone}
                      />
                      <TextField
                        style={textAreaStyle}
                        placeholder={senderMail}
                        name="smail"
                        onChange={this.handleChangeSenderEmail}
                        value={this.state.smail}
                      />
                    </div>
                    <div className={classes.formStyle}>
                      <TextField
                        style={textAreaStyle}
                        placeholder={jobName}
                        name="name"
                        onChange={this.handleChangeName}
                        value={this.state.name}
                      />
                      <TextField
                        style={textAreaStyle}
                        placeholder={location}
                        name="location"
                        onChange={this.handleChangeLocation}
                        value={this.state.location}
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
                <div style={alertStyle}>
                  <p>נא מלאו את כל השדות הנדרשים</p>
                </div>
              ) : (
                ""
              )}
              {this.state.loading ? (
                <div style={loaderStyle}>
                  <CircularProgress />
                </div>
              ) : (
                ""
              )}

              {this.state.sent ? (
                <DialogActions>
                  <Button onClick={this.handleClose} style={cancelButtonStyle}>
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
);
