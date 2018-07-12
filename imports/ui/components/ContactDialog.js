import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import Dialog from '@material-ui/core/Dialog';

export default class ContactDialog extends Component {

    handleClose = () => {
	this.props.onClose(false);
    }
    
    render() {

	const contact = this.props.data
	const { classes, onClose, selectedValue, ...other } = this.props;


	return (
	    <Dialog
	      open={this.props.open}
	      onClose={this.handleClose}
	      >
	      <Table>
		<TableHead>
		  <TableRow>
		    <TableCell>Field</TableCell>
		    <TableCell>Data</TableCell>
		  </TableRow>
		</TableHead>
		<TableBody>
		  <TableRow>
		    <TableCell>First Name</TableCell>
		    <TableCell>{contact.firstName}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Last Name</TableCell>
		    <TableCell>{contact.lastName}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Age</TableCell>
		    <TableCell>{contact.age}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Email</TableCell>
		    <TableCell>{contact.emailAddress}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Comments</TableCell>
		    <TableCell>{contact.comments}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Telephone</TableCell>
		    <TableCell>{contact.telephone}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Street 1</TableCell>
		    <TableCell>{contact.address['street 1']}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Street 2</TableCell>
		    <TableCell>{contact.address['street 2']}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>City</TableCell>
		    <TableCell>{contact.address['city']}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>State/Province</TableCell>
		    <TableCell>{contact.address['state']}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Zip Code</TableCell>
		    <TableCell>{contact.address['Zip Code']}</TableCell>
		  </TableRow>
		  <TableRow>
		    <TableCell>Country</TableCell>
		    <TableCell>{contact.address['country']}</TableCell>
		  </TableRow>
		</TableBody>
	      </Table>
	    </Dialog>
	);
    }
}
