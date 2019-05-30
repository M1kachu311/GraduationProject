import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import styled from "styled-components";
import MediaQuery from "react-responsive";

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

const JobDetailsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const expandedPanelDisplay = {
  display: "flex",
  justifyContent: "space-beetween"
};

const bold = {
  color: "#0D84A3"
};

const expansionHeaderStyle = {
  background: "#fff",
  padding:"0px !important"
};

const expansionPanelStyle = {
  margin: "10px"
};

const detailsStyle = {
  padding: '10px'
};

const ForMobile = styled.div`
  display: flex
  @media (max-width: 840px) {
    font-size: 20px;
    flex-direction: column;
    width: 100%
  }
`
const Text = styled.p`
  color: rgb(52, 58, 64);
  width: 9vw;
  margin: 0 10px;
  font-size: 16px;
  @media (max-width: 840px) {
    padding: 10px 0;
    font-size: 12px;
    width: 100%
  }
`;

const TitleForMobileOnly = styled.h3`
  @media (min-width: 840px) {
    display: none;
  }
`

const ArrowStyle = styled.i`
  margin: 0 40px
  @media (max-width: 840px) {
    margin: 0;
    font-size: 15px;
  }
`
const ArrowDisplay = styled.div`
  display: flex;
  align-items: center;
`

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
            <JobDetailsStyle>

              <MediaQuery  minWidth={841}>
                <ForMobile>
                  <Text><TitleForMobileOnly>סוג עסקה: </TitleForMobileOnly>{this.props.offer}</Text>
                  <Text><TitleForMobileOnly>סוג הנכס: </TitleForMobileOnly>{this.props.type}</Text>
                  <Text><TitleForMobileOnly>מס׳ חדרים: </TitleForMobileOnly>{this.props.rooms}</Text>
                </ForMobile>
                <ForMobile>
                  <Text><TitleForMobileOnly>קומה: </TitleForMobileOnly>{this.props.floor}</Text>
                  <Text><TitleForMobileOnly>כתובת: </TitleForMobileOnly>{this.props.city}</Text>
                </ForMobile>
                <ForMobile>
                  <Text><TitleForMobileOnly>מחיר: </TitleForMobileOnly>{this.props.price}</Text>
                  <Text><TitleForMobileOnly>תאריך: </TitleForMobileOnly>{this.props.date}</Text>
                </ForMobile>
              </MediaQuery>

              <MediaQuery minWidth={541} maxWidth={840}>
                <ForMobile>
                  <Text><TitleForMobileOnly>סוג עסקה: </TitleForMobileOnly>{this.props.offer}</Text>
                  <Text><TitleForMobileOnly>סוג הנכס: </TitleForMobileOnly>{this.props.type}</Text>
                  <Text><TitleForMobileOnly>מס׳ חדרים: </TitleForMobileOnly>{this.props.rooms}</Text>
                </ForMobile>
                <ForMobile>
                  <Text><TitleForMobileOnly>קומה: </TitleForMobileOnly>{this.props.floor}</Text>
                  <Text><TitleForMobileOnly>כתובת: </TitleForMobileOnly>{this.props.city}</Text>
                </ForMobile>
                <ForMobile>
                  <Text><TitleForMobileOnly>מחיר: </TitleForMobileOnly>{this.props.price}</Text>
                  <Text><TitleForMobileOnly>תאריך: </TitleForMobileOnly>{this.props.date}</Text>
                </ForMobile>
              </MediaQuery>

              <MediaQuery  maxWidth={540}>
                <ForMobile>
                  <Text><TitleForMobileOnly>סוג עסקה: </TitleForMobileOnly>{this.props.offer}</Text>
                  <Text><TitleForMobileOnly>סוג הנכס: </TitleForMobileOnly>{this.props.type}</Text>
                  <Text><TitleForMobileOnly>מס׳ חדרים: </TitleForMobileOnly>{this.props.rooms}</Text>
                  <Text><TitleForMobileOnly>קומה: </TitleForMobileOnly>{this.props.floor}</Text>
                </ForMobile>
                <ForMobile>
                  <Text><TitleForMobileOnly>כתובת: </TitleForMobileOnly>{this.props.city}</Text>
                  <Text><TitleForMobileOnly>מחיר: </TitleForMobileOnly>{this.props.price}</Text>
                  <Text><TitleForMobileOnly>תאריך: </TitleForMobileOnly>{this.props.date}</Text>
                </ForMobile>
              </MediaQuery>
              <ArrowDisplay>
                <ArrowStyle  className="fas fa-chevron-down" />
              </ArrowDisplay>
            </JobDetailsStyle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={expandedPanelDisplay}>
            <div>
              <p style={detailsStyle}>
                <b style={bold}>כתובת: </b>
                {this.props.address}
              </p>
              <p style={detailsStyle}>
                <b style={bold}>תיאור הנכס: </b>
                {this.props.description}
              </p>
              <p style={detailsStyle}>
                <b style={bold}>שׁם בעל הנכס: </b>
                {this.props.name}
              </p>
              <p style={detailsStyle}>
                <b style={bold}>מספר טלפון בעל הנכס: </b>
                {this.props.phone}
              </p>
            </div>
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
