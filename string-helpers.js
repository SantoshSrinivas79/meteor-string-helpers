import { Template } from 'meteor/templating';
import { s } from 'meteor/underscorestring:underscore.string';

Template.helpers({
	
	slugify(string) {
		return s.slugify(string);
	},
	
	capitalize(string, lowercaseRest) {
		return s.capitalize(string, lowercaseRest);
	},
	
	concat(...rest) {
		return rest.join('');
	},

	substring(string, start, n) {
		// credit: https://github.com/epeli/underscore.string#sstring--chain
		return s(string).substring(start, n).value();
	},
});
