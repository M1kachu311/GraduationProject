import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

const jobDetailsStyle = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%"
};

const expandedPanelDisplay = {
  display: "flex",
  justifyContent: "space-beetween",
};

const bold = {
  color: "#0D84A3"
};

const expansionHeaderStyle = {
  background: "#fff"
};

const pStyle = {
  color: "#rgb(52, 58, 64)",
  width: "100px"
};

const expansionPanelStyle = {
  margin: "10px"
};

class ExpansionPanelForApartment extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          style={expansionPanelStyle}
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary style={expansionHeaderStyle}>
            <div style={jobDetailsStyle}>
              <p style={pStyle}>{this.props.offer}</p>
              <p style={pStyle}>{this.props.type}</p>
              <p style={pStyle}>{this.props.rooms}</p>
              <p style={pStyle}>{this.props.floor}</p>
              <p style={pStyle}>{this.props.city}</p>
              <p style={pStyle}>{this.props.price}</p>
              <p style={pStyle}>{this.props.date}</p>
              <i style={pStyle} className="fas fa-chevron-down" />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={expandedPanelDisplay}>
            <Typography>
              <p>
                <b style={bold}>כתובת: </b>
                {this.props.address}
              </p>
              <p>
                <b style={bold}>תיאור הנכס: </b>
                {this.props.description}
              </p>
              <p>
                <b style={bold}>שׁם בעל הנכס: </b>
                {this.props.name}
              </p>
              <p>
                <b style={bold}>מספר טלפון בעל הנכס: </b>
                {this.props.phone}
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ExpansionPanelForApartment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExpansionPanelForApartment);
