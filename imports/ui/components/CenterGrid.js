import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
	flexGrow: 1,
	padding: theme.spacing.unit * 2,
	margin: theme.spacing.unit * 2,
	textAlign: 'center',
    },
    item: {
	padding: 20,
	margin: 5,
    }
});


class CenterGrid extends Component {

    constructor (props) {
	super(props);
    }

    render() {

	const { classes } = this.props;
	
	return (
	    <div className={classes.root}>
	      <Grid container justify='center'>
		{
		    React.Children.map(this.props.children, (child) => {
			return (
			    <Grid item className={classes.item}>
			      {child}
			    </Grid>
			);
		    })
		}
	    </Grid>
		</div>
	);
    }

}

export default withStyles(styles)(CenterGrid);
