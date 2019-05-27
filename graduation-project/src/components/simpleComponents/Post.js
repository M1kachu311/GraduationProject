import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const contentStyle = {
  padding: "0 20px 20px 20px",
  width: "95%"
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  margin: "0 20px 10px 0"
};
const dividerStyle = {
  margin: "20px 0"
};
const imgContainer = {
  maxWidth: "50%",
  minWidth: "10%",
  height: "auto",
  float: "left",
  margin: "0 10px",
  display: "inline-block"
};
const subTitle = {
  padding: "10px 20px",
  color: "rgb(12, 132, 163)"
};
const mainStyle = {
  display: "flex",
  flexDirection: "column",
  width: "95%",
  margin: "10px auto",
  borderRadius: "5px",
  background: "#FFF",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
};

export class Post extends Component {
  componentDidMount() {
    fetch(`http://127.0.0.1:3002/posts/category/${this.props.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        if (myJson.length === 0) {
          this.setState({
            data: [
              {
                Name: "",
                Description: "מצטערים אין פוסטים בקטגוריה זו",
                Image: false,
                ID: 1
              }
            ]
          });
        } else {
          this.setState({ data: myJson });
        }
      });
  }
  state = { data: [] };
  render() {
    return this.state.data.map(post => {
      return (
        <div key={post.ID}>
          <div style={mainStyle}>
            <Typography style={subTitle} variant="h4">
              {post.Name}{" "}
            </Typography>
            <Divider style={dividerStyle} variant="middle" />
            <div style={contentStyle}>
              {post.Image ? (
                <div style={imgContainer}>
                  {" "}
                  <a target="__blank" href={post.Image}>
                    {" "}
                    <img style={imageStyle} alt="post" src={post.Image} />
                  </a>
                </div>
              ) : (
                " "
              )}
              <Typography variant="h6" style={{ textAlign: "justify" }}>
                {post.Description}
              </Typography>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Post;
