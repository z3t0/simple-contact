import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from '../ui/pages/Home.js';

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
		  <Home theme={theme}/>
	);
    }
}


