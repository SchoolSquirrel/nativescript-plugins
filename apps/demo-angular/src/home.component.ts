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
			name: 'letter-avatar',
		},
		{
			name: 'nativescript-squirrel-chat-ui',
		},
	];
	n(i) {
		this.router.navigate(['/' + this.demos[i.index].name]);
	}
}
