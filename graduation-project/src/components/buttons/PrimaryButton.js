import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const PrimaryButton = (props) => {
  const { classes } = props;
  return (
    <div>
    	<Button 
			variant="contained" 
			color="primary" 
			className={classes.button}
		>
			{props.title}
    	</Button>
    </div>
  );
}

PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryButton);