import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
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

export class Posts extends Component {
  componentDidMount() {
    console.log(this.props.match.params.categoryId);
  }
  render() {
    return (
      <div style={mainStyle}>
        <Typography style={titleStyle} variant="h5" component="h3">
          כותרת
        </Typography>
        <Divider variant="middle" />
        <div style={mainStyle}>
          <Typography style={subTitle} variant="h5" component="h3">
            עוד כותרת
          </Typography>
          <div style={contentStyle}>
            <Typography component="p">
              דע ךלדחגכךדלחג גהיכגהךלדחי דגחלכי ךלדגכילח ילחגיכנלח י לחידכלחי
              לחגכילחילבחה ילי דע ךלדחגכךדלחג גהיכגהךלדחי דגחלכי ךלדגכילח
              ילחגיכנלח י לחידכלחי לחגכילחילבחה ילי דע ךלדחגכךדלחג גהיכגהךלדחי
              דגחלכי ךלדגכילח ילחגיכנלח י לחידכלחי לחגכילחילבחה ילי דע
              ךלדחגכךדלחג גהיכגהךלדחי דגחלכי ךלדגכילח ילחגיכנלח י לחידכלחי
              לחגכילחילבחה ילי דע ךלדחגכךדלחג גהיכגהךלדחי דגחלכי ךלדגכילח
              ילחגיכנלח י לחידכלחי לחגכילחילבחה ילי דע ךלדחגכךדלחג גהיכגהךלדחי
              דגחלכי ךלדגכילח ילחגיכנלח י לחידכלחי לחגכילחילבחה ילי ךלח יעוד
              כותרת
            </Typography>
            <img
              style={imageStyle}
              alt="post"
              src="https://images.pexels.com/photos/2289236/pexels-photo-2289236.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
