import React, { Component } from "react";

const footerStyle = {
  width: "100vw",
  height: "300px",
  padding: "0 50px 50px 50px",
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
  justifyContent: "center",
  alignItems: "center"
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
  backgroundColor: "#0D84A3",
  border: "1px solid #0D84A3",
  borderRadius: "5px",
  width: "10vw",
  color: "white",
  padding: "10px",
  margin: "5px"
};
const center = {
  textAlign: "center"
};
const centerBtn = {
  margin: "0 auto",
  width: "98%"
};

export class HomePageForm extends Component {
  render() {
    return (
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
        </div>

        <div style={formDivDisplay}>
          <h4 style={{ ...turquoiseColor, ...textPadding, ...center }}>
            שמרו על קשר
          </h4>
          <form
            style={formStyle}
            method="POST"
            action="http://127.0.0.1:3002/mail/contact"
          >
            <input
              name="name"
              style={inputStyle}
              type="text"
              value=""
              placeholder="שם מלא"
            />
            <input
              name="phone"
              style={inputStyle}
              type="text"
              value=""
              placeholder="מספר טלפון"
            />
            <input
              name="email"
              style={inputStyle}
              type="email"
              value=""
              placeholder="כתובת דואר אלקטרוני"
            />
            <textarea
              name="description"
              style={inputStyle}
              rows="4"
              cols="50"
              placeholder="כתוב הודעה..."
            />
            <input
              style={{ ...buttonStyle, ...centerBtn }}
              type="submit"
              value="שלח"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default HomePageForm;
