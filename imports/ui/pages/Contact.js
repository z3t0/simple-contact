import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ContactForm from '../components/ContactForm.js';

import AppBar from '../AppBar.js';
import CenterGrid from '../components/CenterGrid.js';

const styles = theme => ({
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
	      <CenterGrid>
		<Paper className={classes.paper}>
		  <Typography className={classes.typography} variant="title">Contact Form</Typography>
		  <Typography className={classes.typography} variant="subheading">
		    Please enter your information below and we will reach out shortly.
		  </Typography>
		  <ContactForm/>
		</Paper>
	      </CenterGrid>
	    </div>
	);
    }
}

export default withStyles(styles)(ContactPage);
