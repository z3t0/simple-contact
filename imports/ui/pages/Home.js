import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AppBar from '../AppBar.js';
import Banner from '../Banner.js';

const theme = createMuiTheme();

export default class Home extends Component {
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
	      <Banner theme={this.props.theme}
		      technologies={technologies}/>
	    </MuiThemeProvider>
	);
    }
}

