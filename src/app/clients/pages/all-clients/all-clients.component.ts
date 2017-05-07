/**
 * Global Imports
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

/**
 * Local Imports
 */
import { IClient } from '../../client';

/**
 * Import Clients API Service
 */
import { ClientsApiService } from '../../services/clients-api.service';

@Component({
	selector: 'all-clients-page',
	templateUrl: './all-clients.component.html',
	styleUrls: ['./all-clients.component.scss'],
	providers: [FormBuilder]
})
export class AllClientsComponent implements OnInit {
	//-- Variables
	public clients:IClient[];
	private errorMsg:string;
	private subscription:Subscription;
	public filter:FormGroup;

	public banner:any = {
		title: "All Clients",
		main_text: "Here you are gonna be able to see every single client on the API",
		separator: true
	}

	public table:any = {
		titles: [
			{title: '#', slug: 'index'},
			{title: 'Name', slug: 'name'},
			{title: 'Country', slug: 'country'},
			{title: 'City', slug: 'city'},
			{title: 'Email', slug: 'email'}
		],
		rows: new Array()
	}


	constructor(private clientsApiService:ClientsApiService, private formBuilder:FormBuilder) {
		//-- Build filter
		this.filter = this.formBuilder.group({
			country:'',
			city:''
		});
	}
	
	ngOnInit() {
		this.retrieveClients();
	}

	applyFilter(){
		this.retrieveClients(this.filter.value);
	}

	retrieveClients(data?:any){
		this.clientsApiService.getAllClients(data).subscribe(
			clients => {this.table.rows = this.clients = clients;},
			error => this.errorMsg = <any>error 
		);
	}
}
