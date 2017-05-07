/**
 * Global Imports
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * [API Rest Service definition]
 */
@Injectable()
export class ApiService {
	protected headers:Headers;
	protected baseUrl:string = undefined;

	constructor(protected http:Http) {
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
	}

	setBaseUrl(baseUrl:string):void{
		this.baseUrl = baseUrl;
	}

	protected validate():boolean{
		return this.baseUrl != undefined;
	}

	get(method: string):Observable<any>{
		if (!this.validate()){ return new Observable<Response>();}
		return this.http.get(this.baseUrl + method, this.headers);
	}

	post(method: string, body: any):Observable<any>{
		if (!this.validate()){ return new Observable<Response>();}
		return this.http.post(this.baseUrl + method, body, this.headers);
	}

	put(method: string, body: any):Observable<any>{
		if (!this.validate()){ return new Observable<Response>();}
		return this.http.put(this.baseUrl + method, body, this.headers);
	}

	delete(method: string):Observable<any>{
		if (!this.validate()){ return new Observable<Response>();}
		return this.http.delete(this.baseUrl + method, this.headers);
	}
}
