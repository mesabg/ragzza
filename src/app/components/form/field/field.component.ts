/**
 * Global Imports
 */
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

/**
 * JQuery Mask
 */
declare var $:any;

/**
 * Local Imports
 */
import { Field } from './field';

@Component({
	selector: 'custom-field',
	templateUrl: './field.component.html',
	styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
	/**
	 * Inputs
	 */
	@Input() field:Field;
	@Input() form:FormGroup;

	/**
	 * Variables
	 */
	public control:AbstractControl;

	constructor() { }

	ngOnInit() {
		this.control = this.form.controls[this.field.key];
		$('#phone').mask('(+99) (000) 000-00-00');
	}

	get isValid() {
		return this.control.valid;
	}
}
