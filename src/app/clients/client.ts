/**
 * Client Interface
 */

export interface IClient{
	name: string;
	country: string;
	city?: string;
	address?: string;
	phone?: string;
	email: string;
	created: Date;
	updated: Date;
	__v:number;
	_id:string;
}