import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import SendCVPopUp from "./SendCVPopUp";

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
  justifyContent: "space-evenly",
  width: "100%"
};

const arrowStyle = {
  margin: "0 80px"
};

const expandedPanelDisplay = {
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #C7D72B"
};

const pStyle = {
  color: "#C7D72B",
  width: "150px"
};

const expansionHeaderStyle = {
  background: "#343A40"
};

const expansionPanelStyle = {
  margin: "5px"
};

class ExpansionPanelForJobs extends React.Component {
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
              <p style={pStyle}>{this.props.date}</p>
              <p style={pStyle}>{this.props.name}</p>
              <p style={pStyle}>{this.props.type}</p>
              <p style={pStyle}>{this.props.location}</p>
              <i
                style={pStyle}
                style={arrowStyle}
                className="fas fa-chevron-down"
              />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={expandedPanelDisplay}>
            <Typography>
              <p>{this.props.description}</p>
            </Typography>
            <SendCVPopUp />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ExpansionPanelForJobs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExpansionPanelForJobs);
