import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	constructor(private router: Router) {}
	demos = [
		{
			name: 'emoji-picker',
		},
		{
			name: 'nativescript-squirrel-chat-ui',
		},
		{
			name: 'squirrel-chat-ui',
		},
	];
}
