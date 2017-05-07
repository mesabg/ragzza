/**
 * Global Imports
 */
import { Component, OnInit, Input, OnChanges } from '@angular/core';

/**
 * Using JQuery
 */
declare var $:any;

/**
 * Local Imports
 */
import { IClient } from '../../client';

/**
 * Component Definition
 */
@Component({
	selector: 'clients-table',
	templateUrl: './clients-table.component.html',
	styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit, OnChanges {
	/**
	 * Inputs
	 */
	@Input() clients:IClient[];

	/**
	 * Variables
	 */
	public table:any = {
		titles: [
			{title: '#', slug: 'index'},
			{title: 'Name', slug: 'name'},
			{title: 'Country', slug: 'country'},
			{title: 'City', slug: 'city'},
			{title: 'Email', slug: 'email'},
			{title: 'Actions', slug: 'btns'},
		],
		rows: []
	}
	public actions:any = $('button');

	constructor() { }
	ngOnInit() { }

	ngOnChanges(){
		if (this.clients == undefined) return;
		this.table.rows = new Array();
		this.clients.forEach(
		(client:IClient) =>{
			this.table.rows.push({
				id: client._id,
				name: client.name,
				country: client.country,
				city: client.city,
				email: client.email,
				btns: this.buildActions(client._id)
			});
		});
	}

	private buildActions(id:string):string{
		let url_update = `update_client/${id}`;
		let url_delete = `delete_client/${id}`; 
		return `
			<a class="btn btn-warning col-12" href="#/ragzza/${url_update}">Edit</a> 
			<a class="btn btn-danger col-12" href="#/ragzza/${url_delete}">Delete</a>`;
	}
}
