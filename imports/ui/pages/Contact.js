import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ContactForm from '../components/ContactForm.js';

import AppBar from '../AppBar.js';

const styles = theme => ({
    root: {
	flexGrow: 1,
	padding: theme.spacing.unit * 4,
	margin: theme.spacing.unit * 4,
    },
    paper: {
	padding: theme.spacing.unit * 4,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	maxWidth: 700,
    },
    typography: {
	padding: theme.spacing.unit * 2,
    }
});

class ContactPage extends Component {
    constructor (props) {
	super(props);
    }

    render() {
	const { classes } = this.props
	
	return (
	    <div>
	      <AppBar/>
	      <div className={classes.root}>
		<Grid container spacing={24} justify='center'>
		  <Grid item>
		    <Paper className={classes.paper}>
		      <Typography className={classes.typography} variant="title">Contact Form</Typography>
		      <Typography className={classes.typography} variant="subheading">
			Please enter your information below and we will reach out shortly.
		      </Typography>
		      <ContactForm/>
		    </Paper>
		  </Grid>
		</Grid>
	      </div>
	    </div>
	);
    }
}

export default withStyles(styles)(ContactPage);
