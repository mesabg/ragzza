import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found-page',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss']
})
export class _404Component implements OnInit {
	//-- Variables
	public banner:any = {
		title: "404 Not found",
		main_text: "There is nothing, check your url and try again",
		separator: true
	}

	constructor() { }
	ngOnInit() {}
}
