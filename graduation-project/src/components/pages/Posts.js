import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Post from "../simpleComponents/Post.js";
import Divider from "@material-ui/core/Divider";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
  margin: "20px auto",
  borderRadius: "5px",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
};

const titleStyle = {
  padding: "20px",
  background: "#0C84A3",
  color: "#fff",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px"
};

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
        <Typography style={titleStyle} variant="h5" component="h3">
          {this.state.title}
        </Typography>
        <Divider variant="middle" />
        <Post id={this.props.match.params.categoryId} />
      </div>
    );
  }
}

export default Posts;
