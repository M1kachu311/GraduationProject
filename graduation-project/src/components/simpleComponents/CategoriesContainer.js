import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import styled from "styled-components";

const buttonActionTitle = "קישור ללוח ";

const MainStyle = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

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

const TitleDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d84a3;
  border: 1px solid #0d84a3;
  width: 30%;
  @media (max-width: 840px) {
    width: 100%;
    height: 20%;
  }
`;

const TextStyle = styled.p`
  padding: 10px;
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const SendButtonStyle = styled.button`
  background: #0d84a3;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 20px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;
const JHDetailsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

const InnerJHDetailsStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ImgStyle = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
  object-fit: cover;
  @media (max-width: 840px) {
    display: none;
  }
`;

const bold = {
  color: "#0D84A3"
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
      <MainStyle>
        <TitleDisplay>
          <Typography style={titleStyle} variant="h5" component="h3">
            {this.props.title}
          </Typography>
        </TitleDisplay>
        <div style={contentStyle}>
          <div style={detailsStyle}>
            <TextStyle>{this.props.content}</TextStyle>
            <Divider variant="middle" />
            <JHDetailsStyle>
              {this.state.data[0].ID ? (
                <InnerJHDetailsStyle>
                  <ImgStyle
                    src={this.state.data[0].Image}
                    alt="jobholderimage"
                  />

                  <div>
                    <TextStyle>
                      <b style={bold}>שם:</b>{" "}
                      <span>{this.state.data[0].Name}</span>
                    </TextStyle>
                    <TextStyle>
                      <b style={bold}>תפקיד:</b>{" "}
                      <span>{this.state.data[0].Title}</span>
                    </TextStyle>
                  </div>
                  <div>
                    <TextStyle>
                      <b style={bold}>מס׳ טלפון:</b>{" "}
                      <span>{this.state.data[0].Phone}</span>
                    </TextStyle>
                    <TextStyle>
                      <b style={bold}>מייל:</b>
                      <span>{this.state.data[0].Email}</span>
                    </TextStyle>
                  </div>
                </InnerJHDetailsStyle>
              ) : (
                <InnerJHDetailsStyle />
              )}
              <Link to={this.linkHref} style={linkStyle}>
                <SendButtonStyle>
                  {`${buttonActionTitle} ${this.props.title}`}
                </SendButtonStyle>
              </Link>
            </JHDetailsStyle>
          </div>
        </div>
      </MainStyle>
    );
  }
}

export default CategoriesContainer;
