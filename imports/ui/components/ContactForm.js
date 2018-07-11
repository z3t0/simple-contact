// Choose your theme
import React, { Component } from 'react';
import AutoForm from 'uniforms-material/AutoForm';

// A compatible schema
import ContactSchema from '../../schemas/Contact';

export default class ContactForm extends Component {

    render() {
	return (
	    <AutoForm schema={ContactSchema}
		      modelTransform={(mode, model) => {

			  if (mode === 'submit' || mode === 'validate') {
			      // Strip any whitespace from the postal code
			      model.address['Zip Code'] = model.address['Zip Code'].replace(/ /g,'');
			  }

			  return model;
	      }}
	      />
	);
    }
}
