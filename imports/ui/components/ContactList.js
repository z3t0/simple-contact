import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import Contacts from '../../api/contacts.js';
import ContactListItem from '../components/ContactListItem.js';
import CenterGrid from '../components/CenterGrid.js';
import AppBar from '../AppBar.js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class ContactList extends Component {

    render() {

	const {dispatch} = this.props;
	const contacts = this.props.contactList;
	
	return (
	    <div className="container">
	    <AppBar/>
	      <CenterGrid>
		<Table>
		  <TableHead>
		    <TableRow>
		      <TableCell>First Name</TableCell>
		      <TableCell>Last Name</TableCell>
		      <TableCell>Email</TableCell>
		      <TableCell>More</TableCell>
		    </TableRow>
		  </TableHead>
		    <TableBody>
		      {
			  contacts.map( (contact) => {
			      return (
				  <ContactListItem key={contact._id} data={contact}/>
			      );
			  })
		      }
	    </TableBody>
		</Table>
		</CenterGrid>
		</div>
	);

    }
}

const ContactListContainer = createContainer( () => {
    const contactSub = Meteor.subscribe('getContacts');
    
    return {
	contactSubReady: contactSub.ready(),
	contactList: Contacts.find({}).fetch(),
	contactCount: Counts.get('ContactCount')
    };
}, ContactList);

export default connect()(ContactListContainer);
