
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export default class NotFoundPage extends Component {
    render() {
	return (
	    <MuiThemeProvider theme={theme}>
	      <Typography variant="subheading">
		Page Not Found
	      </Typography>
	      <Button color="inherit" href="/">Return Home</Button>
	    </MuiThemeProvider>
	);
    }
}
