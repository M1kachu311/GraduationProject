import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "0 20px 20px 20px"
};

const imageStyle = {
  width: "100px",
  height: "100px"
};

const subTitle = {
  padding: "10px 20px"
};
const mainStyle = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
  margin: "20px auto",
  borderRadius: "5px",
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
            <Typography style={subTitle} variant="h5" component="h3">
              {post.Name}{" "}
            </Typography>
            <div style={contentStyle}>
              <Typography component="p">{post.Description}</Typography>
              {post.Image ? (
                <img style={imageStyle} alt="post" src={post.Image} />
              ) : (
                " "
              )}
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Post;
