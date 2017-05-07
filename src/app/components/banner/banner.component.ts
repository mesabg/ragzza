import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from './banner.interface';

@Component({
	selector: 'banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	/**
	 * Component inputs
	 */
	@Input() data:IBanner;

	constructor() {}
	ngOnInit() {}
}
