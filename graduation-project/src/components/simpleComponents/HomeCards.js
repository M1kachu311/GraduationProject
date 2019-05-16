import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: 400,
        width: 400,
        height: 400,
        margin: '20px'
    }
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
            <CardHeader
            title={this.props.title}
            subheader={this.props.subtitle}
            />
            <CardMedia
            //   className={classes.media} need our own css here
            image={this.props.picture}
            title={this.props.picTitle}
            />
            <CardContent
            // here will sit the component for the jobs
            >
            
            </CardContent>
            <div><Link to={this.props.link}>לוח משרות</Link></div>
            </Card>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);