import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export default class App extends Component {
    render() {
	return (
	    <MuiThemeProvider theme={theme}>
	      <p>Some text</p>
	      <CircularProgress/>
	    </MuiThemeProvider>
	);
    }
}


