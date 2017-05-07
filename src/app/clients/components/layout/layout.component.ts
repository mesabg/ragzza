import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'clients-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {
		this.router.navigateByUrl('ragzza/clients');
	}
}
