import { Meteor } from 'meteor/meteor';

const assign = Object.assign

export default function authentication (state = 0, action = {}){
    switch (action.type) {
    case 'AUTH_LOG_IN':
	return assign({}, state, {
	    user: Meteor.user()
	});
	break;
    default:
	return state;
    }
};
