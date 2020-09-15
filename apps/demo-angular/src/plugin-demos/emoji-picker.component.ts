import { Component, NgZone } from '@angular/core';
import { DemoSharedEmojiPicker } from '@demo/shared';
import {} from '@schoolsquirrel/emoji-picker';

@Component({
	selector: 'demo-emoji-picker',
	templateUrl: 'emoji-picker.component.html',
})
export class EmojiPickerComponent {
	demoShared: DemoSharedEmojiPicker;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedEmojiPicker();
	}
}
