/**
 * Global Inports
 */
import { Directive, OnInit, OnChanges, ElementRef } from '@angular/core';

/**
 * Using classic JQuery
 */
declare var $:any;

/**
 * [Directive definition]
 */
@Directive({
	selector: '[page]',
	host:{
		'(resize)': 'onResize()'
	}
})
export class PageOverheadDirective implements OnInit, OnChanges {
	constructor(private element:ElementRef) {}

	ngOnInit(){ this.pageOverhead(); }

	ngOnChanges(){ this.pageOverhead(); console.log("Changes");}

	onResize(){ console.log("Resize"); }

	pageOverhead(){
		var headerHeight = $($('section#header')[0]).height();
		var footerHeight = $($('section#footer')[0]).height();
		var element = $(this.element.nativeElement);
		var elementHeight = element.height();
		var windowHeight = $(window).height();
		var phase = windowHeight - (headerHeight + footerHeight);
		if ( elementHeight < phase ) element.css('height', phase.toString() + 'px');	
	}
}
