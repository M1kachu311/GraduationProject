import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import SendCVPopUp from './SendCVPopUp';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

const jobDetailsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
}

const arrowStyle = {
    margin: '0 80px'
}

const expandedPanelDisplay = {
    display: 'flex',
    justifyContent: 'space-between'
}

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary>
                <div style={jobDetailsStyle}>
                    <p>{this.props.date}</p>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                    <p>{this.props.location}</p>
                    <i style={arrowStyle} className="fas fa-chevron-down"></i>                
                </div>
            </ExpansionPanelSummary>
          <ExpansionPanelDetails style={expandedPanelDisplay}>
            <Typography>
              {this.props.description}
            </Typography>
            <SendCVPopUp />
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);