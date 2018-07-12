// Choose your theme
import React, { Component } from 'react';
import AutoForm from 'uniforms-material/AutoForm';
import Store from '../../client/store.js';
import addContact from '../../client/actions/addContact.js';

// A compatible schema
import ContactSchema from '../../schemas/Contact';

export default class ContactForm extends Component {

    onSubmit(model) {
	console.log(model);
	Store.dispatch(addContact(model));
    }

    render() {
	return (
	    <AutoForm schema={ContactSchema}
		      modelTransform={(mode, model) => {

			  if (mode === 'submit' || mode === 'validate') {
			      // Strip any whitespace from the postal code
			      if (model.address['Zip Code'])
				  model.address['Zip Code'] = model.address['Zip Code'].replace(/ /g,'');
			  }

			  return model;
		      }}
	    onSubmit={this.onSubmit}
	      />
	);
    }
}
