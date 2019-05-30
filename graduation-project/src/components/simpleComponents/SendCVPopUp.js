import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

const sendCVTitle = "שלח קו״ח";
const sendCV = "שלח קו״ח";
const cancel = "סגור";
const send = "שלח";
const formName = "שם מלא";
const formEmail = "מייל";
const formPhone = "טלפון";
const uploadFile = "העלת קובץ";

const uploadStyle = {
  textIndent: "-999em",
  outline: "none",
  width: "50%",
  height: "10%"
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
  cursor: "pointer",
  marginRight: "20px"
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
const textAreaStyle = {
  width: "85%",
  padding: "10px"
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
export default class SendCVPopUp extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    id: this.props.id,
    loading: false,
    open: false,
    sent: false,
    showAlert: false
  };
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
    this.setState({
      open: false,
      showAlert: false,
      sent: false,
      name: "",
      phone: "",
      email: ""
    });
  };

  handleSubmit = event => {
    let url = "http://127.0.0.1:3002/mail";
    let formData = new FormData();
    var fileField = document.querySelector('input[type="file"]');
    formData.append("file", fileField.files[0]);
    formData.append("id", this.state.id);
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    console.log(...formData);
    if (
      this.state.id === "" ||
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === ""
    ) {
      this.setState({ showAlert: true });
    } else {
      if (formData.get("file") === "undefined") {
        this.setState({ showAlert: true });
      } else {
        if (
          formData
            .get("file")
            .name.toUpperCase()
            .indexOf("DOC") < 0 &&
          formData
            .get("file")
            .name.toUpperCase()
            .indexOf("DOCX") < 0 &&
          formData
            .get("file")
            .name.toUpperCase()
            .indexOf("PDF") < 0 &&
          formData
            .get("file")
            .name.toUpperCase()
            .indexOf("TXT") < 0
        ) {
          this.setState({ showAlert: true });
        } else {
          this.setState({ showAlert: false, loading: true });
          fetch(url, {
            method: "POST", // or 'PUT'
            body: formData // data can be `string` or {object}!
          })
            .then(res => res.json())
            .then(response => {
              if (response.msg) {
                console.log(response);
                this.setState({
                  sent: true,
                  loading: false,
                  name: "",
                  email: "",
                  phone: ""
                });
              }
            })
            .catch(error => console.error("Error:", error));
          event.preventDefault();
        }
      }
    }
  };

  render() {
    return (
      <form encType="multipart/form-data">
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
          <DialogTitle id="form-dialog-title">
            {sendCVTitle} השירות ניתן רק לתושבי ירוחם
          </DialogTitle>
          {this.state.sent ? (
            <div style={notificationtStyle}>
              <p>תודה קורות החיים שלך התקבלו בהצלחה</p>
              <p>ניצור איתך קשר בהקדם</p>
            </div>
          ) : (
            <DialogContent>
              <TextField
                style={textAreaStyle}
                name="name"
                placeholder={formName}
                onChange={this.handleChangeName}
                value={this.state.name}
              />
              <TextField
                style={textAreaStyle}
                name="email"
                placeholder={formEmail}
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
              <TextField
                style={textAreaStyle}
                name="phone"
                placeholder={formPhone}
                onChange={this.handleChangePhone}
                value={this.state.phone}
              />
              <div>
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
              </div>
            </DialogContent>
          )}

          {this.state.showAlert ? (
            <div style={alertStyle}>
              נא מלאו את כל השדות הנדרשים, קבצים יכולים להיות רק בסיומת
              doc,docx,pdf,txt
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
              <Button
                onClick={this.handleSubmit}
                type="submit"
                value="Upload a file"
                style={sendButtonStyle}
              >
                {send}
              </Button>
            </DialogActions>
          )}
        </Dialog>
      </form>
    );
  }
}
