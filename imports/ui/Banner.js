import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import CenterGrid from './components/CenterGrid.js';

const styles = theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing.unit * 4,
      margin: theme.spacing.unit * 4,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Banner extends Component {
    constructor (props) {
	super(props);
    }

    render() {


	const { classes } = this.props;

	return (
	    <div className={classes.root}>
	      <CenterGrid>
		  <Paper className={classes.paper}>
		    <Typography color="inherit" variant="display3">
		      Welcome to Simple Contact
		    </Typography>
		  </Paper>
		  <Paper className={classes.paper}>
		    <Typography color="inherit" variant="subheading">
		      This is an application developed using the following modern web technologies.
		    </Typography>
		    <List>
		      {
			  this.props.technologies.map( (tech) => {
			      return (
				  <ListItem key={tech}>
				    <ListItemText>
				      {tech}
				    </ListItemText>
				  </ListItem>
			      );
			  })
		      }
		       </List>
		  </Paper>

	      </CenterGrid>
	    </div>
	);
    }
}

export default withStyles(styles)(Banner);
