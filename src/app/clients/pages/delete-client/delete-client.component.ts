/**
 * Global Imports
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * Local Imports
 */
import { IClient } from '../../client';

/**
 * Import Clients API Service
 */
import { ClientsApiService } from '../../services/clients-api.service';

/**
 * [Component description]
 */
@Component({
	selector: 'delete-client-page',
	templateUrl: './delete-client.component.html',
	styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {
	private id:string;
	public client:IClient;

	/**
	 * For Inner Components
	 */
	public banner:any = {
		title: "Delete Client",
		main_text: "",
		separator: true
	}

	constructor(private router:Router, private route:ActivatedRoute, private clientsApiService:ClientsApiService) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params) => { this.id = params['id']; });
		this.banner.title += ` {${this.id}}`;
		
		//-- Delete client
		console.log("Deleting client, please wait...");
		this.clientsApiService.deleteClient(this.id).subscribe(
			(content) => {
				if (content == "deleted") this.banner.main_text = "Client successfully deleted";
				else this.banner.main_text = "Something happens, client has not been deleted";
				console.log(this.banner.main_text);
			});
	}
}
