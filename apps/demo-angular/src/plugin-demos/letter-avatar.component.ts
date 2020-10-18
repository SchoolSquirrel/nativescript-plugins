import { Component, NgZone } from '@angular/core';
import {} from '@schoolsquirrel/letter-avatar';

@Component({
	selector: 'demo-letter-avatar',
	templateUrl: 'letter-avatar.component.html',
})
export class LetterAvatarComponent {
	constructor(private _ngZone: NgZone) {}

	ngOnInit() {}
}
