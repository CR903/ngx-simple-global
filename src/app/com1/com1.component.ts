import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from 'ngx-simple-global';

@Component({
	selector: 'app-com1',
	template: `<p>Component com1</p><input type="text" [(ngModel)]="sg.gv" placeholder="{{sg.placeholder}}">`
})
export class Com1Component implements OnInit {

	constructor(private sg: SimpleGlobal) { }
	ngOnInit() {
	}

}
