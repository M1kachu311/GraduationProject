import React, { Component } from "react";
import Post from "../simpleComponents/Post.js";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
  margin: "20px auto",
  borderRadius: "5px",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
};

const TitleStyle = styled.h2`
  padding: 20px;
  background: #0c84a3;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media (max-width: 840px) {
    text-align: center;
  }
`;

export class Posts extends Component {
  componentDidMount() {
    fetch(
      `http://127.0.0.1:3002/categories/single/${
        this.props.match.params.categoryId
      }`
    )
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        if (myJson.length === 0) {
          this.setState({ title: "" });
        } else {
          this.setState({ title: myJson[0].Name });
        }
      });
  }

  state = { title: "" };
  render() {
    return (
      <div style={mainStyle}>
        <TitleStyle>{this.state.title}</TitleStyle>
        <Divider variant="middle" />
        <Post id={this.props.match.params.categoryId} />
      </div>
    );
  }
}

export default Posts;
