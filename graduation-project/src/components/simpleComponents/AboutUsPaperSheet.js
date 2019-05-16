import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const title = 'קצת על המרכז צעירים בירוחם'

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});

const paperSheetStyle = {
    width: '85%',
	margin: '20px auto'
}

const dividerStyle = {
	margin: '20px 0'
}

const AboutUsPaperSheet = (props) => {
	const { classes } = props;

	return (
		<div style={paperSheetStyle}>
			<Paper
				className={classes.root}
				elevation={1}
			>
			<h1>{title}</h1>
			<Divider style={dividerStyle} variant="middle" />
			<Typography component="p">
			ם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ למקם טקסט אמיתי אחר. הסיבה היא, כי בעת הצגת סקיצה עם טקסט אמיתי קריא, יתחיל הצופה לקרוא אוטומטית את הטקסט, ואם תוכן הטקסט לא רלוונטי לעבודה המוצגת - הדבר יסיח את דעתו מהעיצוב.
			ם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ למקם טקסט אמיתי אחר. הסיבה היא, כי בעת הצגת סקיצה עם טקסט אמיתי קריא, יתחיל הצופה לקרוא אוטומטית את הטקסט, ואם תוכן הטקסט לא רלוונטי לעבודה המוצגת - הדבר יסיח את דעתו מהעיצוב.
			</Typography>
			</Paper>
		</div>
	);
}

AboutUsPaperSheet.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsPaperSheet);