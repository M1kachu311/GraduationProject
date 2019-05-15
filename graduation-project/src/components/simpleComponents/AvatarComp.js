import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};

const avatarCustomStyle = {
	borderRadius: 0
}

function AvatarComp(props) {
  const { classes } = props;
  return (
      <Avatar alt="Remy Sharp" src={props.img} className={classes.bigAvatar} style={avatarCustomStyle} />
  );
}

AvatarComp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvatarComp);