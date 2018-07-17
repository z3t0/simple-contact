
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CenterGrid from '../components/CenterGrid.js';
import AppBar from '../AppBar.js';

import route from '../../client/actions/route.js';

const theme = createMuiTheme();

export default class NotFoundPage extends Component {
    render() {
	return (
	    <MuiThemeProvider theme={theme}>
	      <AppBar />
	      <CenterGrid>
		<div>
		  <Typography variant="subheading">
		    Page Not Found
		  </Typography>
		  <Button color="inherit" onClick={() => route("/")}>Return Home</Button>
		</div>
	      </CenterGrid>
	    </MuiThemeProvider>
	);
    }
}
