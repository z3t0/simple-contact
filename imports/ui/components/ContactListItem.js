import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';

import ContactDialog from './ContactDialog.js';

export default class ContactListItem extends Component{
    constructor(props) {
	super(props);

	this.state = {
	    open: false,
	};
	this.myRef = React.createRef()
    }

    handleClick = () => {
	this.setState({
	    open: true,
	});
    }

    handleClose = () => {

	this.setState({
	    open: false,
	});
    }

    render() {
	const contact = this.props.data.contact

	return (
	    <TableRow
	      ref={this.myRef}
		hover>
		<TableCell>{contact.firstName}</TableCell>
		<TableCell>{contact.lastName}</TableCell>
		<TableCell>{contact.emailAddress}</TableCell>
		<TableCell><Button onClick={ () => this.handleClick()}>More</Button></TableCell>
		<ContactDialog
		  open={this.state.open}
		  onClose={this.handleClose}
		  data={this.props.data}
		  />
	      </TableRow>
	);
    }	
}
