import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: 400,
    height: 400,
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

class HomeCards extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title={this.props.title} />
        {this.props.linkDescription}
        <div>
          <Link to={this.props.link}>{this.props.linkText}</Link>
        </div>
      </Card>
    );
  }
}

HomeCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeCards);
