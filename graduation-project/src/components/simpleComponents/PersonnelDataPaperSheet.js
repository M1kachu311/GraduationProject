import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
  margin: "0 auto 50px auto"
};

const PersonnelDataPaperSheetStyle = {
  height: "auto"
};
const headingStyle = {
  textAlign: "center",
  padding: "20px"
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
          <Typography variant="h5" component="h2" style={headingStyle}>
            {personnelTitle}
          </Typography>
          <PersonnelInfo />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PersonnelDataPaperSheet);
