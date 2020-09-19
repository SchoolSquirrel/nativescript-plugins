import { Component, NgZone } from '@angular/core';

@Component({
	selector: 'demo-squirrel-chat-ui',
	templateUrl: 'squirrel-chat-ui.component.html',
})
export class SquirrelChatUiComponent {

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		//
	}
}
