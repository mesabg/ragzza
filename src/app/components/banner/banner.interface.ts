import { IButton } from './button.interface';

export interface IBanner{
	title?:string;
	main_text?:string;
	separator?:boolean;
	secondary_text?:string;
	style?:string;
	button?:IButton;
}