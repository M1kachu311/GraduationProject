import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});

const paperSheetStyle = {
    width: '85%',
	margin: '0 auto'
}

const AboutUsPaperSheet = (props) => {
	const { classes } = props;

	return (
		<div style={paperSheetStyle}>
			<Paper
				className={classes.root}
				elevation={1}
			>
				<Typography component="p">
					Paper can be used to build surface or other elements for your application.
		</Typography>
			</Paper>
		</div>
	);
}

AboutUsPaperSheet.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsPaperSheet);