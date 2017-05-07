/**
 * Global Imports
 */
import { Validators } from '@angular/forms';

/**
 * Local Imports
 */
import { Field } from '../../../components';

/**
 * Form Definition
 */
export const CLIENT_FORM: Field[] = [
	new Field({
		key: 'name',
		label: 'Name',
		type: 'text',
		validators: [
			Validators.required,
			Validators.minLength(4)
		]
	}),
	new Field({
		key: 'email',
		label: 'Email',
		type: 'email',
		validators: [
			Validators.required,
			Validators.email
		]
	}),
	new Field({
		key: 'phone',
		label: 'Phone',
		type: 'phone',
		validators: []
	}),
	new Field({
		key: 'address',
		label: 'Address',
		type: 'text',
		validators: []
	}),
	new Field({
		key: 'country',
		label: 'Country',
		type: 'text',
		validators: [
			Validators.required,
			Validators.minLength(2)
		]
	}),
	new Field({
		key: 'city',
		label: 'City',
		type: 'text',
		validators: []
	})
];