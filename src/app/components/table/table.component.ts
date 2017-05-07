/**
 * Global imports
 */
import { Component, OnInit, Input } from '@angular/core';

/**
 * Interfaces Import
 */
import { ITable } from './table';

/**
 * [Component definition]
 */
@Component({
	selector: 'custom-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	/**
	 * Inputs
	 */
	@Input() data:ITable;

	constructor() { }

	ngOnInit() { 
		//-- Check if rows and titles has the same size
		if (this.data == undefined) return;
	}
}
