import { Component, NgZone } from '@angular/core';
import { DemoSharedSquirrelChatUi } from '@demo/shared';
import {} from '@schoolsquirrel/squirrel-chat-ui';

@Component({
	selector: 'demo-squirrel-chat-ui',
	templateUrl: 'squirrel-chat-ui.component.html',
})
export class SquirrelChatUiComponent {
	demoShared: DemoSharedSquirrelChatUi;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSquirrelChatUi();
	}
}
