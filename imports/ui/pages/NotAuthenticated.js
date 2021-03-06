
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CenterGrid from '../components/CenterGrid.js';
import AppBar from '../AppBar.js';

import { push } from 'connected-react-router';

const theme = createMuiTheme();

export default class NotAuthenticated extends Component {
    render() {
	return (
	    <MuiThemeProvider theme={theme}>
	      <AppBar />
	      <CenterGrid>
		<div>
		  <Typography variant="subheading">
		    Please Sign in to Access this content
		  </Typography>
		  <Button color="inherit" onClick={() => push("/sign-in")}>Return Home</Button>
		</div>
	      </CenterGrid>
	    </MuiThemeProvider>
	);
    }
}
