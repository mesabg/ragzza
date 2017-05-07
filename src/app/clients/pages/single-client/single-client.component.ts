/**
 * Global Imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local Imports
 */
import { IClient } from '../../client';
import { Field, FormService } from '../../../components';
import { CLIENT_FORM } from '../../components/client-form/client.form';

/**
 * Import Clients API Service
 */
import { ClientsApiService } from '../../services/clients-api.service';

/**
 * [Component description]
 */
@Component({
	selector: 'single-client-page',
	templateUrl: './single-client.component.html',
	styleUrls: ['./single-client.component.scss'],
	providers: [FormService]
})
export class SingleClientComponent implements OnInit {
	//-- Variables
	private id:string;
	public returnMsg:string;
	public errorMsg:any;
	public banner:any = {
		title: "Create Client",
		main_text: "Here you are gonna be able to create a new client",
		separator: true
	}

	constructor(
		private clientsApiService:ClientsApiService,
		public formService:FormService
	) { 
		this.formService.initForm(CLIENT_FORM);
		this.suscribeToEvents(); 
	}

	ngOnInit() { }

	private suscribeToEvents(){
		//-- Form Service
		this.formService.submit$.subscribe(
			(data:any) => this.createClient(data));
	}

	createClient(client:any){
		console.log("Creating client, please wait...");
		this.clientsApiService.createClient(client)
			.subscribe(
				message => {this.returnMsg = message, this.formService.unlockSubmit(); console.log("Client created!");},
				error => this.errorMsg = <any>error 
			);
	}
}
