import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import Store from '../client/store.js';
import logOut from '../client/actions/logOut.js';

import { Meteor } from 'meteor/meteor';

const styles = {
    root: {
	flexGrow: 1,
    },
    flex: {
	flex: 1,
    },
    menuButton: {
	marginLeft: -12,
	marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
	auth: true,
	anchorEl: null,
    };

    handleChange = (event, checked) => {
	this.setState({ auth: checked });
    };

    handleMenu = event => {
	this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
	this.setState({ anchorEl: null });
    };

    logOut = () => {
	Store.dispatch(logOut());
    }

    renderAuthentication () {
	const user = Meteor.userId();

	if (user != null) {
	    return (<Button color="inherit" onClick={this.logOut} href="/">Sign Out</Button>);
	}
	else {
	    return (<Button color="inherit" href="/sign-in">Sign In</Button>);
	}
    }

    render() {
	const { classes } = this.props;
	const { auth, anchorEl } = this.state;
	const open = Boolean(anchorEl);

	return (
		<div className={classes.root}>
		<AppBar position="static">
		<Toolbar>
		<Typography variant="title" color="inherit" className={classes.flex}>
		  Simple Contact
		</Typography>
		<Button color="inherit" href="/">Home</Button>
		<Button color="inherit" href="/contact">Contact</Button>

		{
		    this.renderAuthentication()
		}

		<Button color="inherit" href="/contact-list">Admin</Button>
		</Toolbar>
		</AppBar>
		</div>
	);
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
