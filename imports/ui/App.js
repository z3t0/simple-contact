import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AppBar from '../ui/AppBar.js';
import Banner from '../ui/Banner.js';

const theme = createMuiTheme();

export default class App extends Component {
    render() {
	const technologies = [
	    "MeteorJS",
	    "ReactJS",
	    "React Redux",
	    "React Router",
	    "MongoDB",
	    "Material-UI",
	    "Uniforms"
	];

	return (
	    <MuiThemeProvider theme={theme}>
	      <AppBar/>
	      <Banner theme={theme}
		      technologies={technologies}/>
	    </MuiThemeProvider>
	);
    }
}


