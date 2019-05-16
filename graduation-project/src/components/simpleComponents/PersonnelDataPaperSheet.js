import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import PersonnelInfo from "./PersonnelInfo";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const paperSheetStyle = {
  width: "85%",
  margin: "0 auto 20px auto"
};

const PersonnelDataPaperSheetStyle = {
  height: "auto"
};

const personnelTitle = "נושאי תפקידים";

export class PersonnelDataPaperSheet extends Component {
  render() {
    return (
      <div style={paperSheetStyle}>
        <Paper
          // elevation={1}
          style={PersonnelDataPaperSheetStyle}
        >
          <Typography variant="h5" component="h3">
            {personnelTitle}
          </Typography>
          <Divider variant="middle" />
          <PersonnelInfo />
        </Paper>
      </div>
    );
  }
}

PersonnelDataPaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonnelDataPaperSheet);
