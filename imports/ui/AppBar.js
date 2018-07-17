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

import { connect }  from 'react-redux';
import { compose } from 'redux';

import Store from '../client/store.js';

import logOut from '../client/actions/logOut.js';
import route from '../client/actions/route.js';


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
	console.log('logout');
	Store.dispatch(logOut());
    }

    navigate (url) {
	Store.dispatch(route(url));
    }

    renderAuthentication () {
	const user = Meteor.userId();

	if (user != null) {
	    return (
		<div>
		  <Button color="inherit" onClick={this.logOut}>Sign Out</Button>

		  <Button color="inherit" onClick={() => this.navigate("/contact-list")}>Admin</Button>
		</div>
);
	}
	else {return (<Button color="inherit" onClick={() => this.navigate('/sign-in')}>
		    Sign In
		    </Button>);
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
		<Button color="inherit" onClick={() => this.navigate("/")}>Home</Button>
		<Button color="inherit" onClick={() => this.navigate("/contact")}>Contact</Button>

		{
		    this.renderAuthentication()
		}

		</Toolbar>
		</AppBar>
		</div>
	);
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles,
	       {
		   name: 'MenuAppbar',
	       }),
    connect()
)(MenuAppBar);
