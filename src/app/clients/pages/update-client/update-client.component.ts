/**
 * Global Imports
 */
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

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

@Component({
	selector: 'update-client-page',
	templateUrl: './update-client.component.html',
	styleUrls: ['./update-client.component.scss'],
	providers: [FormService]
})
export class UpdateClientComponent implements OnInit {
	/**
	 * Variables
	 */
	private id:string;
	public client:IClient;
	public clientEmitter:EventEmitter<any> = new EventEmitter<any>();
	public returnMsg:string;
	public errorMsg:any;

	/**
	 * For Inner Components
	 */
	public banner:any = {
		title: "Update Client",
		main_text: "Here you are gonna be able to update a single client on the API",
		separator: true
	}

	constructor(
		private router:Router, 
		private route:ActivatedRoute,
		private clientsApiService:ClientsApiService,
		public formService:FormService
	) {
		this.formService.initForm(CLIENT_FORM);
	}

	ngOnInit() {
		//-- Route Params
		this.route.params.subscribe(
			(params) => { this.id = params['id']; });

		//-- Form Service
		this.formService.syncValues(this.clientEmitter);
		this.formService.submit$.subscribe(
			(client:any) => this.updateClient(client));

		//-- Get BackEnd Data
		this.clientsApiService.getSingleClient(this.id).subscribe(
			(client) => {this.client = client; this.clientEmitter.emit(client);});
	}

	private updateClient(client:any){
		console.log("Updating client, please wait...");
		this.clientsApiService.updateClient(this.id, client)
			.subscribe(
				message => {this.returnMsg = message, this.formService.unlockSubmit(); console.log("Client updated!");},
				error => this.errorMsg = <any>error 
			);
	}
}
