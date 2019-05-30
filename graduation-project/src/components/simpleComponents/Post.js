import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";

const ContentStyle = styled.div`
  padding: 0 20px 20px 20px;
  width: 95%;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin: 0 2% 1% 0;
  @media (max-width: 840px) {
    padding-left: 20px;
  }
`;
const dividerStyle = {
  margin: "2% 0"
};
const imgContainer = {
  maxWidth: "50%",
  minWidth: "10%",
  height: "auto",
  float: "left",
  margin: "0 10px",
  display: "inline-block"
};
const SubTitle = styled.h3`
  padding: 10px 20px;
  color: rgb(12, 132, 163);
  padding-bottom: 0px;
`;

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
const TextStyle = styled.p`
  text-align: justify;
  @media (max-width: 840px) {
    font-size: 14px;
    padding: 0 20px 20px 20px;
  }
`;

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
            <SubTitle>{post.Name} </SubTitle>
            <Divider style={dividerStyle} variant="middle" />
            <ContentStyle>
              {post.Image ? (
                <div style={imgContainer}>
                  {" "}
                  <a target="__blank" href={post.Image}>
                    {" "}
                    <ImageStyle alt="post" src={post.Image} />
                  </a>
                </div>
              ) : (
                " "
              )}
              <TextStyle>{post.Description}</TextStyle>
            </ContentStyle>
          </div>
        </div>
      );
    });
  }
}

export default Post;
