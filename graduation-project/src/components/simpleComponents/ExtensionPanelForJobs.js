import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import SendCVPopUp from "./SendCVPopUp";
import styled from "styled-components";

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

const ArrowStyle = styled.i`
  margin: 0 40px
  @media (max-width: 540px) {
    margin: 40px 10px 0 10px;
    font-size: 15px;
  }
`
  

const ExpandedPanelDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    text-align: center
  }
`;

const expansionHeaderStyle = {
  background: "#fff"
};

const expansionPanelStyle = {
  margin: "5px"
};

const ForMobile = styled.div`
  display: flex
  @media (max-width: 540px) {
    font-size: 20px;
    flex-direction: column;
    width: 100%
  }
`

const Text = styled.p`
  color: rgb(52, 58, 64);
  width: 12vw;
  margin: 0 10px;
  font-size: 16px;
  @media (max-width: 540px) {
    padding: 10px 0;
    font-size: 12px;
    width: 100%
  }
`;

const DateText = styled.p`
  color: rgb(52, 58, 64);
  width: 20vw;
  margin: 0 10px;
  font-size: 16px;
  @media (max-width: 540px) {
    padding: 10px 0;
    font-size: 12px;
  }
`;

const TitleForMobileOnly = styled.h3`
  @media (min-width: 540px) {
    display: none;
  }
`

class ExpansionPanelForJobs extends React.Component {
  state = {
    expanded: null,
    id: ""
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
              <ForMobile>
                <Text><TitleForMobileOnly>שם: </TitleForMobileOnly>{this.props.name}</Text>
                <Text><TitleForMobileOnly>סוג: </TitleForMobileOnly>{this.props.type}</Text>
              </ForMobile>
              <ForMobile>
                <Text><TitleForMobileOnly>מיקום: </TitleForMobileOnly>{this.props.location}</Text>
                <DateText><TitleForMobileOnly>תאריך: </TitleForMobileOnly>{this.props.date}</DateText>
              </ForMobile>
              <ArrowStyle className="fas fa-chevron-down" />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ExpandedPanelDisplay>
              <Typography>{this.props.description}</Typography>
              <SendCVPopUp id={this.props.id} />
            </ExpandedPanelDisplay>
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
