import Store from '../../../imports/client/store.js';
import React, { Component } from 'react';
import ContactList from '../components/ContactList.js';
import { Provider } from 'react-redux';

export default class contactRoot extends Component {

    render() {
	return (
		<ContactList/>
	)
    }
}

