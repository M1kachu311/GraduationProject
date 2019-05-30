import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const title = "קצת על המרכז צעירים בירוחם";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const paperSheetStyle = {
  width: "85%",
  margin: "20px auto"
};

const dividerStyle = {
  margin: "20px 0"
};
const aboutText = {
  fontSize: "20px"
};

const AboutUsPaperSheet = props => {
  const { classes } = props;

  return (
    <div style={paperSheetStyle}>
      <Paper className={classes.root} elevation={1}>
        <h1>{title}</h1>
        <Divider style={dividerStyle} variant="middle" />
        <Typography component="p" style={aboutText}>
          <b>צעירים בירוחם</b> הינה עמותה שקמה על-ידי צעירים בני ירוחם וחדשים
          המאמינים בירוחם, אוהבים אותה ומחויבים אליה, שבחרו לקבוע כאן את מקומם
          ולחיות כאן את חייהם. צעירים בירוחם פועלת לעידוד התיישבות צעירה ולביסוס
          קהילה צעירה מעורבת, יוזמת ומובילה. צעירים בירוחם פועלת לקידום תחומי
          החיים של צעירים: דיור, תעסוקה, תרבות, קהילה, יזמות ומעורבות חברתית.
          הקבוצה מפעילה מספר תכניות ביניהן: <br /> <b>הפעלת מרכז צעירים</b>{" "}
          הכולל תכניות לחיילים, קבוצות סטודנטים ורשת חברתית תכניות להתיישבות
          קהילה ויזמות. <br /> <b>תכניות לצמצום פערים</b> ביניהן תכנית הדגל
          "יהב" לצמצום פערים במשפחות צעירות והתחדשות עירונית בבלוקים. <br />{" "}
          <b>קמפוס "כולנא"</b> הכולל מכינה קדם צבאית, תכנית למשתחררים, בית מדרש
          אלול מן המזרח ושלוחה אקדמית עם מכללת ספיר. <br /> <b> חינוך ומדעים</b>{" "}
          – הפעלת כלל תכניות המדעים והרובוטיקה בעיר.
        </Typography>
      </Paper>
    </div>
  );
};

AboutUsPaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutUsPaperSheet);
