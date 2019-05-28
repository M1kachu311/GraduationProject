import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

const footerStyle = {
  width: "100%",
  height: "300px",
  padding: "0 0 50px 0",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  backgroundColor: "#343A40",
  justifyContent: "space-evenly"
};

const detailsStyle = {
  width: "30vw",
  fontSize: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const formDivDisplay = {
  width: "30vw",
  display: "flex",
  flexDirection: "column",
  fontSize: "18px"
};

const formStyle = {
  display: "flex",
  flexDirection: "column"
};

const whiteColor = {
  color: "white"
};

const turquoiseColor = {
  color: "#C7D72B"
};
// const blueColor = {
//   color: "rgb(13, 132, 163)"
// };
// const facebookColor = {
//   color: "#3C5A99"
// };
const textPadding = {
  padding: "10px"
};

const inputStyle = {
  padding: "10px",
  color: "#0D84A3",
  border: "1px solid #C7D72B",
  borderRadius: "5px",
  margin: "5px",
  textAlign: "center"
};

const buttonStyle = {
  backgroundColor: "#C7D72B",
  border: "1px solid #0D84A3",
  borderRadius: "5px",
  width: "10vw",
  color: "white",
  padding: "10px",
  margin: "5px",
  cursor: "pointer"
};
const center = {
  textAlign: "center"
};
const centerBtn = {
  margin: "0 auto",
  width: "98%"
};
const big = {
  fontSize: "50px"
};

export class HomePageForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    description: "",
    open: false,
    loading: true
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
  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };
  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false, loading: true });
  };

  handleSubmit = event => {
    this.handleClick();
    var url = "http://127.0.0.1:3002/mail/contact";
    var data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      description: this.state.description
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        if (response.status) {
          this.handleClose();
          this.setState({ loading: false });
          this.handleClick();
        }
        this.setState({
          name: "",
          phone: "",
          email: "",
          description: ""
        });
      })
      .catch(error => console.error("Error:", error));

    event.preventDefault();
  };
  render() {
    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={10000}
          onClose={this.handleClose}
          message={
            this.state.loading ? (
              <span id="message-id">
                אנא המתן...
                <CircularProgress style={{ margin: "0 auto" }} />
              </span>
            ) : (
              <span id="message-id">המייל נשלח בהצלחה</span>
            )
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        <div style={footerStyle}>
          <div style={detailsStyle}>
            <h4 style={{ ...turquoiseColor, ...textPadding }}>
              עמותת "צעירים בירוחם" (ע"ר)
            </h4>
            <p style={textPadding}>
              <span style={turquoiseColor}>כתובת:</span>{" "}
              <span style={whiteColor}>רח' אליהו הנביא 330, ירוחם</span>{" "}
            </p>
            <p style={textPadding}>
              <span style={turquoiseColor}>טלפון:</span>{" "}
              <span style={whiteColor}>0543455111‏</span>{" "}
            </p>
            <p style={textPadding}>
              <span style={turquoiseColor}>דוא"ל:</span>{" "}
              <span style={whiteColor}>bohanal@gmail.com</span>{" "}
            </p>
            <p style={textPadding}>
              <span style={turquoiseColor}>
                <a
                  href="https://www.facebook.com/zvi.yeruham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={turquoiseColor}
                >
                  <i className="fab fa-facebook" style={big} />
                </a>
              </span>{" "}
            </p>
          </div>

          <div style={formDivDisplay}>
            <h4 style={{ ...turquoiseColor, ...textPadding, ...center }}>
              שמרו על קשר
            </h4>
            <form onSubmit={this.handleSubmit} style={formStyle}>
              <input
                onChange={this.handleChangeName}
                name="name"
                style={inputStyle}
                type="text"
                placeholder="שם מלא"
                value={this.state.name}
              />
              <input
                onChange={this.handleChangePhone}
                name="phone"
                style={inputStyle}
                type="text"
                placeholder="מספר טלפון"
                value={this.state.phone}
              />
              <input
                onChange={this.handleChangeEmail}
                name="email"
                style={inputStyle}
                type="email"
                placeholder="כתובת דואר אלקטרוני"
                value={this.state.email}
              />
              <textarea
                onChange={this.handleChangeDescription}
                name="description"
                style={inputStyle}
                rows="4"
                cols="50"
                placeholder="כתוב הודעה..."
                value={this.state.description}
              />
              <input
                style={{ ...buttonStyle, ...centerBtn }}
                type="submit"
                value="שלח"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default HomePageForm;
