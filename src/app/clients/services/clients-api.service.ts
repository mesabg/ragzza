/**
 * Global Imports
 */
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Local Imports
 */
import { IClient } from '../client';

/**
 * Import API Service
 */
import { ApiService } from '../../api';
import { BASE_URL } from './clients-api.config';


interface ICustomResponseClients{
	code:string;
	message:string;
	content:IClient[];
}

interface ICustomResponseClient{
	code:string;
	message:string;
	content:IClient;
}

interface ICustomResponseCreateClient{
	code:string;
	message:string;
	content:string;
}

interface ICustomResponseUpdateClient{
	code:string;
	message:string;
	content:string;
}

interface ICustomResponseDeleteClient{
	code:string;
	message:string;
	content:string;
}

@Injectable()
export class ClientsApiService{
	private urlSearchParams:URLSearchParams = new URLSearchParams();

	constructor(private apiService:ApiService) { 
		this.apiService.setBaseUrl(BASE_URL);
	}

	private buildQueryString(data:any):string{
		let parameters = new URLSearchParams();
		for(let key in data) parameters.set(key, data[key]);
		return parameters.toString();
	}

	getAllClients(filter?:any):Observable<IClient[]>{
		//-- Build data
		let parameters = this.buildQueryString(filter);
		return this.apiService.get(`clients?${parameters}`)
					.map(response => <ICustomResponseClients> response.json())
					.map(response => { 
						if (response.code == "500") 
							throw Observable.throw(`An error has orurred ${response.code} ${response.message}`);
						return <IClient[]> response.content;
					})
					.catch(this.errorHandler);
	}

	getSingleClient(id:string):Observable<IClient>{
		return this.apiService.get(`clients/${id}`)
					.map(response => <ICustomResponseClient> response.json())
					.map(response => { 
						if (response.code == "500") 
							throw Observable.throw(`An error has orurred ${response.code} ${response.message}`);
						return <IClient> response.content;
					})
					.catch(this.errorHandler);
	}

	createClient(client:any):Observable<string>{
		return this.apiService.post(`clients`, client)
					.map(response => <ICustomResponseCreateClient> response.json())
					.map(response => { 
						if (response.code == "500") 
							throw Observable.throw(`An error has orurred ${response.code} ${response.message}`);
						return <string> response.content;
					})
					.catch(this.errorHandler);
	}

	updateClient(id:string, client:any):Observable<string>{
		client['id'] = id;
		return this.apiService.put(`clients/${id}`, client)
					.map(response => <ICustomResponseUpdateClient> response.json())
					.map(response => { 
						if (response.code == "500") 
							throw Observable.throw(`An error has orurred ${response.code} ${response.message}`);
						return <string> response.content;
					})
					.catch(this.errorHandler);
	}

	deleteClient(id:string):Observable<string>{
		return this.apiService.delete(`clients/${id}`)
					.map(response => <ICustomResponseDeleteClient> response.json())
					.map(response => { 
						if (response.code == "500") 
							throw Observable.throw(`An error has orurred ${response.code} ${response.message}`);
						return <string> response.content;
					})
					.catch(this.errorHandler);
	}

	errorHandler(error:Response){
		alert(`An error has orurred ${error}`);
		return Observable.throw(error.json() || 'Server error');
	}
}
