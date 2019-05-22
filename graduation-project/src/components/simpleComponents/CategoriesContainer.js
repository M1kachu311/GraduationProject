import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const buttonActionTitle = "קישור ללוח ";

const mainStyle = {
  display: "flex",
  width: "90%",
  margin: "20px auto",
  borderRadius: "5px",
  background: "white",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
};

const contentStyle = {
  display: "flex",
  width: "100%"
};

const detailsStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%"
};

const titleStyle = {
  width: "200px",
  textAlign: "center",
  color: "white"
};

const titleDisplay = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5E9EA0",
  border: "1px solid #5E9EA0",
  width: "30%"
};

const textStyle = {
  padding: "10px"
};

const sendButtonStyle = {
  background: "#0D84A3",
  color: "#fff",
  border: "none",
  height: "35px",
  cursor: "pointer",
  margin: "40px",
  textAlign: "left",
  width: "200px"
};
const JHDetailsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const innerJHDetailsStyle = {
  display: "flex",
  alignItems: "center"
};

const imgStyle = {
  width: "100px",
  height: "100px",
  margin: "10px"
};
const bold = {
    color: "#0D84A3"
}

const sendButtonStyle = {
    background: '#0D84A3',
    color: '#fff',
    border: 'none',
    height: '35px',
    cursor: 'pointer',
    margin: '40px',
    textDecoration: 'none'
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff"
};

export class CategoriesContainer extends Component {
  componentDidMount() {
    fetch(`http://127.0.0.1:3002/personnel/category/${this.props.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        if (myJson.length !== 0) {
          this.setState({ data: myJson });
        }
      });
  }
  state = {
    data: [
      { Image: "", Name: "", Description: "", Phone: "", Email: "", ID: false }
    ]
  };
  linkHref = `/posts/category/${this.props.id}`;
  render() {
    return (
      <div style={mainStyle}>
        <div style={titleDisplay}>
          <Typography style={titleStyle} variant="h5" component="h3">
            {this.props.title}
          </Typography>
        </div>
        <div style={contentStyle}>
          <div style={detailsStyle}>
            <Typography style={textStyle} component="p">
              {this.props.content}
            </Typography>
            <Divider variant="middle" />
            <div style={JHDetailsStyle}>
              {this.state.data[0].ID ? (
                <div style={innerJHDetailsStyle}>
                  <img
                    style={imgStyle}
                    src={this.state.data[0].Image}
                    alt="jobholderimage"
                  />
                  <div>
                    <Typography style={textStyle} component="p">
                      <b style={bold}>שם:</b> {this.state.data[0].Name}
                    </Typography>
                    <Typography style={textStyle} component="p">
                      <b style={bold}>תפקיד:</b> {this.state.data[0].Title}
                    </Typography>
                  </div>
                  <div>
                    <Typography style={textStyle} component="p">
                      <b style={bold}>מס׳ טלפון:</b> {this.state.data[0].Phone}
                    </Typography>
                    <Typography style={textStyle} component="p">
                      <b style={bold}>מייל:</b> {this.state.data[0].Email}
                    </Typography>
                  </div>
                </div>
              ) : (
                <div style={innerJHDetailsStyle} />
              )}

              <Button style={sendButtonStyle}>
                <Link to={this.linkHref} style={linkStyle}>
                  {`${buttonActionTitle} ${this.props.title}`}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesContainer;
